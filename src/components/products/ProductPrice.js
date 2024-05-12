import React from "react";

function ProductPrice({ product }) {
  return (
    <div className="price-container">
      {product.saleItem && <p>${product.salePrice}</p>}
      <p>
        {product.saleItem ? (
          <span className={product.saleItem ? "sale-item" : ""}>
            ${product.price}
          </span>
        ) : (
          `$${product.price}`
        )}

        {product.saleItem ? " Limited time" : ""}
      </p>
    </div>
  );
}

export default ProductPrice;
