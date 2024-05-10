import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import Loading from "../Loading";
import Product from "./Product";

function ProductList() {
  const { isLoading, products } = useProducts();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ul>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </ul>
  );
}

export default ProductList;
