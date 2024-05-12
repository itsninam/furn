import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "fetch_data": {
      return {
        ...state,
        products: action.payload,
        isLoading: true,
      };
    }
    case "data_loaded": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "show_quickshop_btn": {
      return {
        ...state,
        isQuickShopVisible: action.payload,
      };
    }

    default:
      return "Unrecognized command";
  }
}

const initialState = {
  products: [],
  isLoading: true,
  isQuickShopVisible: null,
};

const ProductsContext = createContext();
const BASE_URL = "http://localhost:9000";

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, products, isQuickShopVisible } = state;

  const getCurrentProduct = (product, productIndex) => {
    const currentProduct =
      product.images.length > 1
        ? product.images[productIndex]
        : product.images[0];

    return currentProduct;
  };

  const getProductColor = (colour) => {
    if (colour === "white") {
      return "#ffff";
    } else if (colour === "black") {
      return "#000";
    } else if (colour === "light sand") {
      return "#e6ccb2";
    } else if (colour === "marble + wood") {
      return "#edede9";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/furniture`);
      const data = await res.json();
      dispatch({ type: "fetch_data", payload: data });
    } catch {
      alert("There was an error loading your data...");
    } finally {
      dispatch({ type: "data_loaded" });
    }
  };

  const onHandleImageHover = (event, imagePath, type) => {
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

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        products,
        getCurrentProduct,
        onHandleImageHover,
        isQuickShopVisible,
        dispatch,
        getProductColor,
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
