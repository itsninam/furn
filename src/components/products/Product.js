import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import QuickShop from "../QuickShop";

function Product({ product }) {
  const { getCurrentProduct } = useProducts();

  const [productIndex, setProductIndex] = useState(0);
  const [isQuickshopModalVisible, setIsQuickshopModalVisible] = useState(false);

  const currentProduct = getCurrentProduct(product, productIndex);

  return (
    <>
      <li>
        <ProductImage
          product={product}
          currentProduct={currentProduct}
          setIsQuickshopModalVisible={setIsQuickshopModalVisible}
        />
        <ProductPrice product={product} />
        <ProductColor
          product={product}
          setProductIndex={setProductIndex}
          productIndex={productIndex}
        />
      </li>

      {isQuickshopModalVisible && (
        <QuickShop
          id={product.id}
          setIsQuickshopModalVisible={setIsQuickshopModalVisible}
        />
      )}
    </>
  );
}

export default Product;
