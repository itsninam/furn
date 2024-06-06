import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { Outlet } from "react-router-dom";

function Product({
  product,
  handleColor,
  isFilter,
  selectedId,
  curr,
  current,
}) {
  const { getCurrentProduct } = useProducts();

  const [productIndex, setProductIndex] = useState(0);

  // const current = getCurrentProduct()

  return (
    <>
      <li>
        <ProductImage
          product={product}
          // currentProduct={currentProduct}
          productIndex={productIndex}
          isFilter={isFilter}
          selectedId={selectedId}
          curr={curr}
          // current={current}
        />
        <ProductPrice product={product} />
        <ProductColor
          product={product}
          setProductIndex={setProductIndex}
          productIndex={productIndex}
          isNumColorVisible={true}
          handleColor={handleColor}
        />
      </li>

      <Outlet />
    </>
  );
}

export default Product;
