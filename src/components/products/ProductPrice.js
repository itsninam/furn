import React from "react";

function ProductPrice({ product }) {
  return (
    <div className="price-container">
      {product.saleItem && (
        <p className="original-price">${product.salePrice}</p>
      )}
      <p>
        {product.saleItem ? (
          <span className={product.saleItem ? "sale-item" : ""}>
            ${product.price}
          </span>
        ) : (
          `$${product.price}`
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
