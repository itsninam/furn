import React from "react";
import { useProducts } from "../contexts/ProductsContext";
import { useLocation } from "react-router-dom";

function QuickShop() {
  const { products, navigate } = useProducts();

  const { search } = useLocation();

  const productId = new URLSearchParams(search).get("item");
  const chosenProduct = products.find((product) => product.id === productId);

  return (
    <div className="quick-shop">
      {chosenProduct.furnitureName}
      <button onClick={() => navigate(-1, { replace: true })}>CLose</button>
    </div>
  );
}

export default QuickShop;
