import { ProductsProvider } from "./contexts/ProductsContext";
import "./App.css";
import Main from "./components/Main";
import ProductList from "./components/ProductList";

function App() {
  return (
    <ProductsProvider>
      <Main>
        <ProductList />
      </Main>
    </ProductsProvider>
  );
}

export default App;
