import React, { Fragment, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

function ProductColor({ product, setProductIndex }) {
  const { getProductColor } = useProducts();

  return (
    <div className="colors-container">
      {product.colors.map((color, index) => {
        return (
          <>
            <button
              key={index}
              className="btn-color"
              onClick={() => {
                setProductIndex(index);
              }}
              style={{ backgroundColor: getProductColor(color) }}
            ></button>
          </>
        );
      })}
      <span>
        {product.colors.length}
        {product.colors.length > 1 ? " colors" : " color"}
      </span>
    </div>
  );
}

export default ProductColor;
