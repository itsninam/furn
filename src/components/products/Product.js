import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";

import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { Outlet } from "react-router-dom";

function Product({ product }) {
  const { getCurrentProduct } = useProducts();

  const [productIndex, setProductIndex] = useState(0);

  const currentProduct = getCurrentProduct(product, productIndex);

  return (
    <>
      <li>
        <ProductImage product={product} currentProduct={currentProduct} />
        <ProductPrice product={product} />
        <ProductColor
          product={product}
          setProductIndex={setProductIndex}
          productIndex={productIndex}
        />
      </li>

      <Outlet />
    </>
  );
}

export default Product;
