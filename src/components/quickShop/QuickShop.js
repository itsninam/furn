import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useLocation } from "react-router-dom";

import ProductName from "../products/ProductName";
import ProductPrice from "../products/ProductPrice";
import ProductColor from "../products/ProductColor";
import QuickShopImage from "./QuickShopImage";
import CloseButton from "./CloseButton";
import ProductDescription from "./ProductDescription";
import ProductQuantitySelection from "./ProductQuantitySelection";

function QuickShop() {
  const { products, getCurrentProduct, userInput, dispatch } = useProducts();
  const { search } = useLocation();

  const productId = new URLSearchParams(search).get("item");
  const color = new URLSearchParams(search).get("color");
  const chosenProduct = products.find(
    (product) => Number(product.id) === Number(productId)
  );

  const [imageIndex, setImageIndex] = useState(0);

  const [productIndex, setProductIndex] = useState(
    chosenProduct.options
      .map((option) => option)
      .map((opt) => opt.color)
      .indexOf(`${color}`)
  );
  const [buttonLabel, setButtonLabel] = useState("");

  const currentProduct = getCurrentProduct(chosenProduct, productIndex);

  const handleAddToBasket = (event) => {
    event.preventDefault();

    if (!userInput || userInput === "select") {
      return;
    }

    const newProduct = {
      furnitureName: chosenProduct.furnitureName,
      price: chosenProduct.saleItem
        ? chosenProduct.salePrice
        : chosenProduct.price,
      colors: chosenProduct.options[productIndex].color,
      images: chosenProduct.options[productIndex].images,
      id: chosenProduct.id,
      quantity: userInput,
    };

    dispatch({ type: "add_to_cart", payload: newProduct });
    if (newProduct) {
      setButtonLabel("Item added!");
      setTimeout(() => {
        setButtonLabel("Add to basket");
      }, 800);
    }
  };

  return (
    <div className="quick-shop-overlay">
      <div className="quick-shop-modal">
        <CloseButton />
        <div className="flex-container">
          <QuickShopImage
            currentProduct={currentProduct}
            chosenProduct={chosenProduct}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
          <div className="info-container">
            <ProductName product={chosenProduct.furnitureName} />
            <ProductPrice product={chosenProduct} />
            <ProductColor
              product={chosenProduct}
              productIndex={productIndex}
              setProductIndex={setProductIndex}
              setImageIndex={setImageIndex}
              isColorNameVisible={true}
            />
            <ProductDescription />
            <ProductQuantitySelection
              handleAddToBasket={handleAddToBasket}
              buttonLabel={buttonLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickShop;
