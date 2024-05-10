import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

function Product({ product }) {
  return (
    <li>
      <ProductImage product={product} />
      <ProductName productName={product.furnitureName} />
    </li>
  );
}

export default Product;
