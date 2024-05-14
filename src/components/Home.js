import React from "react";
import { useProducts } from "../contexts/ProductsContext";
import { Link } from "react-router-dom";

import Loading from "./Loading";

function Home() {
  const { isLoading, productCategories } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul>
      {productCategories.map((product) => {
        return (
          <li key={product}>
            <Link to={product}>{product}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Home;
