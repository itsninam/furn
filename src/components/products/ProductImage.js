import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

import ProductName from "./ProductName";

const ProductImage = ({ product, currentProduct, productIndex }) => {
  const { onHandleImageHover, isQuickShopBtnVisible } = useProducts();

  return (
    <>
      <Link
        to={{
          pathname: "quickshop",
          search: `?item=${product.id}&color=${productIndex}`,
        }}
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
          <button className="btn-quickview">
            <span>Quick Shop</span>
          </button>
        )}
      </Link>
      <ProductName product={product.furnitureName} />
    </>
  );
};

export default ProductImage;
