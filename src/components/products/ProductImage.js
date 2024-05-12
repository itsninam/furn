import { useProducts } from "../../contexts/ProductsContext";
import ProductName from "./ProductName";
import { Link, useNavigate } from "react-router-dom";

const ProductImage = ({ product, currentProduct }) => {
  const { onHandleImageHover, isQuickShopVisible } = useProducts();

  const navigate = useNavigate();

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

      {isQuickShopVisible === currentProduct.secondaryImage && (
        <button
          className="btn-quickview"
          onClick={() => navigate("/quickshop", { state: product.id })}
        >
          Quick Shop
        </button>
      )}
      <ProductName product={product} />
    </div>
  );
};

export default ProductImage;
