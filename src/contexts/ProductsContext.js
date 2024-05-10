import { createContext, useReducer, useEffect, useContext } from "react";

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

    default:
      return "Unrecognized command";
  }
}

const initialState = {
  products: [],
  isLoading: true,
};

const ProductsContext = createContext();
const BASE_URL = "http://localhost:9000";

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, products } = state;

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

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        products,
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
