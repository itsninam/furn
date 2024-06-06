import { createContext, useReducer, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "fetch_data": {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }
    case "show_quickshop_btn": {
      return {
        ...state,
        isQuickShopBtnVisible: action.payload,
      };
    }
    case "img_loading": {
      return {
        ...state,
        isImageLoading: false,
      };
    }
    case "user_input": {
      return {
        ...state,
        userInput: action.payload,
      };
    }
    case "add_to_cart": {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      const colorExists = state.cartItems.find(
        (item) => item.colors === action.payload.colors
      );

      if (itemExists) {
        if (colorExists) {
          return {
            ...state,
            userInput: "select",
            cartItems: state.cartItems.map((item) =>
              item.colors === action.payload.colors
                ? {
                    ...item,
                    colors: action.payload.colors,
                    quantity:
                      Number(item.quantity) + Number(action.payload.quantity),
                  }
                : item
            ),
          };
        } else {
          return {
            ...state,
            userInput: "select",
            cartItems: [...state.cartItems, action.payload],
          };
        }
      } else {
        return {
          ...state,
          userInput: "select",
          cartItems: [...state.cartItems, action.payload],
        };
      }
    }
    case "remove_item": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.colors !== action.payload.colors
        ),
      };
    }
    default:
      return "Unrecognized command";
  }
}

const initialState = {
  products: [],
  isLoading: true,
  isQuickShopBtnVisible: null,
  isImageLoading: true,
  userInput: "",
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const ProductsContext = createContext();
const BASE_URL = "http://localhost:9000";

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    products,
    isQuickShopBtnVisible,
    isImageLoading,
    userInput,
    cartItems,
  } = state;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  document.body.style.overflow = pathname.includes("/quickshop")
    ? "hidden"
    : "auto";

  const getCurrentProduct = (product, productIndex) => {
    console.log(product);
    // const currentProduct =
    //   product.length > 1 ? product[productIndex] : product[0];

    // return currentProduct;
    // console.log(product, productIndex);
  };

  const getSelectedProductColor = (colour) => {
    if (colour === "white") {
      return "#ffff";
    } else if (colour === "black") {
      return "#000";
    } else if (colour === "light sand") {
      return "#e6ccb2";
    } else if (colour === "marble + wood") {
      return "#edede9";
    } else if (colour === "yellow") {
      return "#edc531";
    } else if (colour === "mint") {
      return "#84dcc6";
    } else if (colour === "blue") {
      return "#118ab2";
    } else if (colour === "green") {
      return "#588157";
    } else if (colour === "neutral") {
      return "#b08968";
    } else if (colour === "assorted") {
      return "#fff";
    } else if (colour === "butterscotch") {
      return "#7f4f24";
    } else if (colour === "light green") {
      return "#656d4a";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/furniture`);
      const data = await res.json();
      dispatch({ type: "fetch_data", payload: data });
    } catch {
      alert("There was an error loading your data...");
    }
  };

  const onHandleImageHover = (event, imagePath, type) => {
    // console.log(event.currentTarget, imagePath, type);
    if (type === "mouseOver") {
      event.currentTarget.firstChild.src = require(`../assets/images/${imagePath.secondaryImage}`);
      dispatch({
        type: "show_quickshop_btn",
        payload: imagePath.secondaryImage,
      });
    } else if (type === "mouseOut") {
      event.currentTarget.firstChild.src = require(`../assets/images/${imagePath.primaryImage}`);
      dispatch({ type: "show_quickshop_btn", payload: null });
    }
  };

  const productCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        products,
        getCurrentProduct,
        onHandleImageHover,
        isQuickShopBtnVisible,
        dispatch,
        getSelectedProductColor,
        productCategories,
        navigate,
        isImageLoading,
        userInput,
        cartItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("ProductsContext was used outside the products provider");
  return context;
}

export { ProductsProvider, useProducts };
