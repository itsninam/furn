import React from "react";

function ProductPrice({ product }) {
  return (
    <div className="price-container">
      {product.saleItem && <p>${product.salePrice}</p>}
      <p>
        <span className={product.saleItem ? "sale-item" : ""}>
          ${product.price}
        </span>{" "}
        {product.saleItem ? "Limited time" : ""}
      </p>
    </div>
  );
}

export default ProductPrice;
