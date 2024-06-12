import { useEffect, useState } from "react";

import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { Outlet } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";

function Product({ product, currentProducts }) {
  const { isProductFiltered } = useProducts();
  const [productImage, setProductImage] = useState(product.options[0]);
  const [productIndex, setProductIndex] = useState(0);

  const selectedImage = isProductFiltered ? product.options[0] : productImage;

  useEffect(() => {
    isProductFiltered && setProductIndex(0);
  }, [isProductFiltered]);

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
          setProductImage={setProductImage}
        />
      </li>

      <Outlet />
    </>
  );
}

export default Product;
