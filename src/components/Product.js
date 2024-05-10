import React from "react";

function Product({ product }) {
  return (
    <li>
      <span>{product.furnitureName}</span>
    </li>
  );
}

export default Product;
