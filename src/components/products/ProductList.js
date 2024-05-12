import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import Loading from "../Loading";
import Product from "./Product";
import QuickShop from "../QuickShop";
import { Outlet, Route, Routes } from "react-router-dom";

function ProductList() {
  const { isLoading, products } = useProducts();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <ul>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>

      <Outlet />
    </section>
  );
}

export default ProductList;
