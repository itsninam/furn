import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import furnitureData from "../data/furnitureData";

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
      const updatedCartItems = state.cartItems.filter(
        (item) => item.colors !== action.payload.colors
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        shippingSelection:
          updatedCartItems.length === 0 ? 0 : state.shippingSelection,
        promoCodeValidation: state.cartItems.length === 0 && null,
      };
    }
    case "shipping_selection": {
      return {
        ...state,
        shippingSelection: action.payload,
      };
    }
    case "obtain_promo": {
      return {
        ...state,
        promoCodeInput: action.payload,
      };
    }
    case "apply_promo": {
      return {
        ...state,
        promoCodeApply: action.payload,
        promoCodeInput: "",
        promoCodeValidation:
          action.payload === state.promoCode.toLowerCase()
            ? "correct"
            : "invalid",
      };
    }
    case "copy_promo": {
      return {
        ...state,
        isPromoCodeCopied: true,
      };
    }
    case "reset_promo": {
      return {
        ...state,
        isPromoCodeCopied: false,
        promoCodeValidation: null,
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
  shippingSelection: "",
  promoCodeInput: "",
  promoCodeApply: "",
  promoCodeValidation: "",
  promoCode: "LoremIpsum",
  isPromoCodeCopied: false,
};

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [isProductFiltered, setIsProductFiltered] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    products,
    isQuickShopBtnVisible,
    isImageLoading,
    userInput,
    cartItems,
    shippingSelection,
    promoCodeInput,
    promoCodeApply,
    promoCodeValidation,
    promoCode,
    isPromoCodeCopied,
  } = state;
  const [promoCodeMessage, setPromoCodeMessage] = useState("");
  const [isMobileView, setMobileView] = useState(null);
  // eslint-disable-next-line
  const [windowSize, setWindowSize] = useState(
    window.matchMedia("(max-width: 945px)")
  );

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({ type: "fetch_data", payload: furnitureData });
  }, []);

  document.body.style.overflow = pathname.includes("/quickshop")
    ? "hidden"
    : "auto";

  const getCurrentProduct = (product, productIndex) => {
    const currentProduct =
      product.options.length > 1
        ? product.options[productIndex]
        : product.options[0];

    return currentProduct;
  };

  useEffect(() => {
    if (promoCodeValidation === "correct") {
      setPromoCodeMessage("Promo applied!");
    } else if (promoCodeValidation === "invalid") {
      setPromoCodeMessage("Invalid code");
    } else if (cartItems.length === 0) {
      setPromoCodeMessage("");
    }

    if (pathname !== "/cart") {
      setPromoCodeMessage("");
      dispatch({ type: "reset_promo" });
    }
  }, [promoCodeValidation, cartItems.length, pathname]);

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
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onHandleImageHover = (event, imagePath, type) => {
    if (type === "mouseOver") {
      event.target.src = require(`../assets/images/${imagePath}`);
      dispatch({
        type: "show_quickshop_btn",
        payload: imagePath,
      });
    } else if (type === "mouseOut") {
      event.target.src = require(`../assets/images/${imagePath}`);
      dispatch({ type: "show_quickshop_btn", payload: null });
    }
  };

  const productCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    if (windowSize.matches) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, [windowSize.matches]);

  windowSize.addEventListener("change", (event) => {
    if (event.matches) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  });

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
        isProductFiltered,
        setIsProductFiltered,
        shippingSelection,
        promoCodeApply,
        promoCodeInput,
        promoCodeValidation,
        promoCode,
        isPromoCodeCopied,
        promoCodeMessage,
        isMobileView,
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
