import React from "react";
import { useProducts } from "../contexts/ProductsContext";

function QuickShop({ id, setIsQuickshopModalVisible }) {
  const { products } = useProducts();

  const chosenProduct = products.find((product) => product.id === id);

  return (
    <div className="quick-shop">
      {chosenProduct.furnitureName}
      <button onClick={() => setIsQuickshopModalVisible(false)}>Close</button>
    </div>
  );
}

export default QuickShop;
