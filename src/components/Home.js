import React from "react";
import { useProducts } from "../contexts/ProductsContext";
import { Link } from "react-router-dom";

import Loading from "./Loading";

function Home() {
  const { isLoading, productCategories, products } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  const getImages = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <ul className="shop-products">
      {productCategories.map((category) => {
        return (
          <li key={category}>
            <Link className="product-link" to={category}>
              shop {category}
            </Link>

            <img
              src={require(`../assets/images/${
                getImages(category)[0].options[0].images.primaryImage
              }`)}
              alt={category}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Home;
