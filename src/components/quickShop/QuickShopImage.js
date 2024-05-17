import React from "react";
import { useState } from "react";

function QuickShopImage({
  currentProduct,
  chosenProduct,
  imageIndex,
  setImageIndex,
}) {
  const images = Object.values(currentProduct).flat(1);

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
    <div className="image-container">
      <button onClick={handleImgBack}>Back</button>
      <img
        alt={chosenProduct.furnitureName}
        src={require(`../../assets/images/${images[imageIndex]}`)}
      />
      <button onClick={handleImgNext}>Next</button>
    </div>
  );
}

export default QuickShopImage;
