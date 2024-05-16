import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

import ProductName from "./ProductName";

const ProductImage = ({ product, currentProduct }) => {
  const { onHandleImageHover, isQuickShopBtnVisible } = useProducts();

  return (
    <div
      className="image-container"
      onMouseOver={(event) =>
        onHandleImageHover(event, currentProduct, "mouseOver")
      }
      onMouseOut={(event) =>
        onHandleImageHover(event, currentProduct, "mouseOut")
      }
    >
      <img
        src={require(`../../assets/images/${currentProduct.primaryImage}`)}
        alt={product.furnitureName}
      />

      {isQuickShopBtnVisible === currentProduct.secondaryImage && (
        <Link
          className="btn-quickview"
          to={{ pathname: "quickshop", search: `?item=${product.id}` }}
        >
          <span>Quick Shop</span>
        </Link>
      )}
      <ProductName product={product} />
    </div>
  );
};

export default ProductImage;
