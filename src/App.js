import { ProductsProvider } from "./contexts/ProductsContext";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import ProductList from "./components/products/ProductList";
import Home from "./components/Home";
import QuickShop from "./components/quickShop/QuickShop";
import TotalCartItems from "./components/products/TotalCartItems";

function App() {
  return (
    <ProductsProvider>
      <Main>
        <TotalCartItems />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productCategory" element={<ProductList />}>
            <Route path="quickshop" element={<QuickShop />} />
          </Route>
        </Routes>
      </Main>
    </ProductsProvider>
  );
}

export default App;
