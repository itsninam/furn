import React, { useState } from "react";
import { useProducts } from "../contexts/ProductsContext";
import { useLocation } from "react-router-dom";

import ProductName from "../components/products/ProductName";
import ProductPrice from "../components/products/ProductPrice";
import ProductColor from "../components/products/ProductColor";

function QuickShop() {
  const [imageIndex, setImageIndex] = useState(0);
  const { products, navigate } = useProducts();
  const { search } = useLocation();

  const productId = new URLSearchParams(search).get("item");
  const chosenProduct = products.find((product) => product.id === productId);

  const images = Object.values(chosenProduct.images[0]).flat(1);

  const handleImgNext = () => {
    return imageIndex < images.length - 1
      ? setImageIndex((prev) => (prev += 1))
      : setImageIndex((prev) => (prev -= imageIndex));
  };

  const handleImgBack = () => {
    return imageIndex > 0
      ? setImageIndex((prev) => (prev -= 1))
      : setImageIndex(images.length - 1);
  };

  return (
    <div className="quick-shop">
      <button
        className="close-btn"
        onClick={() => navigate(-1, { replace: true })}
      >
        CLose
      </button>
      <div className="flex-container">
        <div className="image-container">
          <button onClick={handleImgBack}>Back</button>
          <img
            alt={chosenProduct.furnitureName}
            src={require(`../assets/images/${images[imageIndex]}`)}
          />
          <button onClick={handleImgNext}>Next</button>
        </div>
        <div className="info-container">
          <ProductName product={chosenProduct.furnitureName} />
          <ProductPrice product={chosenProduct} />
          <ProductColor product={chosenProduct} />
        </div>
      </div>
    </div>
  );
}

export default QuickShop;
