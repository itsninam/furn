import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";

function QuickShop() {
  const { products } = useProducts();
  const { state } = useLocation();
  console.log(state, "state");

  const chosenProduct = products.find((product) => product.id === state);

  console.log(chosenProduct);
  return (
    <div className="quick-shop">
      {chosenProduct.furnitureName}
      <Link to="/">Close</Link>
    </div>
  );
}

export default QuickShop;
