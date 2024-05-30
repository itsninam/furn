import React from "react";

function ProductPrice({ product }) {
  return (
    <div className="price-container">
      {product.saleItem && (
        <p className="original-price">${product.salePrice.toLocaleString()}</p>
      )}
      <p>
        {product.saleItem ? (
          <span className={product.saleItem ? "sale-item" : ""}>
            ${product.price.toLocaleString()}
          </span>
        ) : (
          `$${product.price.toLocaleString()}`
        )}

        {product.saleItem ? (
          <span className="sale-tag"> Limited time</span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default ProductPrice;
