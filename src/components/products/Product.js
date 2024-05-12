import { useState } from "react";
import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import { useProducts } from "../../contexts/ProductsContext";
import ProductPrice from "./ProductPrice";

function Product({ product }) {
  const { getCurrentProduct } = useProducts();
  const [productIndex, setProductIndex] = useState(0);
  const currentProduct = getCurrentProduct(product, productIndex);

  return (
    <li>
      <ProductImage product={product} currentProduct={currentProduct} />
      <ProductPrice product={product} />
      <ProductColor
        product={product}
        setProductIndex={setProductIndex}
        productIndex={productIndex}
      />
    </li>
  );
}

export default Product;
