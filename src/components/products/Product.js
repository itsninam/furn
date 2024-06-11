import { useState } from "react";

import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { Outlet } from "react-router-dom";

function Product({ product, setIsFilter, isFilter, currentProducts }) {
  const [productImage, setProductImage] = useState(product.options[0]);
  const [productIndex, setProductIndex] = useState(0);

  const selectedImage = isFilter ? product.options[0] : productImage;

  console.log(productIndex);

  return (
    <>
      <li>
        <ProductImage product={product} selectedImage={selectedImage} />
        <ProductPrice product={product} />
        <ProductColor
          product={product}
          setProductIndex={setProductIndex}
          productIndex={productIndex}
          isNumColorVisible={true}
          currentProducts={currentProducts}
          setIsFilter={setIsFilter}
          setProductImage={setProductImage}
        />
      </li>

      <Outlet />
    </>
  );
}

export default Product;
