import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

function Product({ product, isFilter, setIsFilter }) {
  const { products } = useProducts();
  const [image, setImage] = useState(product.options[0].images);

  const onHandleImageHover = (event, action) => {
    if (isFilter) {
      if (action === "mouseover") {
        event.target.src = require(`../../assets/images/${product.options[0].images.secondaryImage}`);
      } else {
        event.target.src = require(`../../assets/images/${product.options[0].images.primaryImage}`);
      }
    } else {
      if (action === "mouseover") {
        event.target.src = require(`../../assets/images/${image.secondaryImage}`);
      } else {
        event.target.src = require(`../../assets/images/${image.primaryImage}`);
      }
    }
  };

  const handleSelectColor = (color, id = 0) => {
    setImage(
      products
        .find((product) => product.id === id)
        .options.find((option) => option.color === color).images
    );
    setIsFilter(false);
  };

  return (
    <>
      <div>
        <p>{product.furnitureName}</p>
        <ul>
          {product.options.map((option, index) => {
            return (
              <p
                onClick={() => handleSelectColor(option.color, product.id)}
                key={index}
              >
                {option.color}
              </p>
            );
          })}
        </ul>

        {isFilter ? (
          <img
            src={require(`../../assets/images/${product.options[0].images.primaryImage}`)}
            onMouseOver={(event) => onHandleImageHover(event, "mouseover")}
            onMouseOut={(event) => onHandleImageHover(event, "mouseout")}
          />
        ) : (
          <img
            src={require(`../../assets/images/${image.primaryImage}`)}
            onMouseOver={(event) => onHandleImageHover(event, "mouseover")}
            onMouseOut={(event) => onHandleImageHover(event, "mouseout")}
          />
        )}
      </div>
    </>
  );
}

export default Product;
