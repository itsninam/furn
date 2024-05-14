import { ProductsProvider } from "./contexts/ProductsContext";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import ProductList from "./components/products/ProductList";
import Home from "./components/Home";

function App() {
  return (
    <ProductsProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productCategory" element={<ProductList />}></Route>
        </Routes>
      </Main>
    </ProductsProvider>
  );
}

export default App;
