import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useLocation } from "react-router-dom";

import ProductName from "../products/ProductName";
import ProductPrice from "../products/ProductPrice";
import ProductColor from "../products/ProductColor";
import QuickShopImage from "./QuickShopImage";
import CloseButton from "./CloseButton";

function QuickShop() {
  const { products, getCurrentProduct } = useProducts();
  const { search } = useLocation();

  const productId = new URLSearchParams(search).get("item");
  const color = new URLSearchParams(search).get("color");

  const [imageIndex, setImageIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(Number(color));

  const chosenProduct = products.find((product) => product.id === productId);

  const currentProduct = getCurrentProduct(chosenProduct, productIndex);

  return (
    <div className="quick-shop">
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
          />
        </div>
      </div>
    </div>
  );
}

export default QuickShop;
