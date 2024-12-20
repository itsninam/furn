import { ProductsProvider } from "./contexts/ProductsContext";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Main from "./components/Main";
import ProductList from "./components/products/ProductList";
import Home from "./components/Home";
import QuickShop from "./components/quickShop/QuickShop";
import Navigation from "./components/Navigation";
import CartPage from "./components/CartPage";
import Banner from "./components/Banner";

function App() {
  return (
    <ProductsProvider>
      <Banner />
      <Navigation />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productCategory" element={<ProductList />}>
            <Route path="quickshop" element={<QuickShop />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Main>
    </ProductsProvider>
  );
}

export default App;
