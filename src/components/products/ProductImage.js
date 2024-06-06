import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

import ProductName from "./ProductName";

const ProductImage = ({
  product,
  currentProduct,
  productIndex,
  selectedId,
  curr,
  isFilter,
  current,
}) => {
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
          onHandleImageHover(
            event,
            isFilter ? curr[0]?.images[0] : product.options[0].images[0],
            "mouseOver"
          )
        }
        onMouseOut={(event) =>
          onHandleImageHover(
            event,
            isFilter ? curr[0]?.images[0] : product.options[0].images[0],
            "mouseOut"
          )
        }
      >
        {/* <img
          src={require(`../../assets/images/${currentProduct.primaryImage}`)}
          alt={product.furnitureName}
        />

        {isQuickShopBtnVisible === currentProduct.secondaryImage && (
          <button className="btn-quickview">
            <span>Quick Shop</span>
          </button>
        )} */}
        {isFilter ? (
          <img
            src={require(`../../assets/images/${curr[0]?.images[0].primaryImage}`)}
          />
        ) : product.id === selectedId ? (
          <img
            src={require(`../../assets/images/${curr[0]?.images[0].primaryImage}`)}
          />
        ) : (
          <img
            src={require(`../../assets/images/${curr[0].images[0].primaryImage}`)}
          />
        )}
      </Link>
      <ProductName product={product.furnitureName} />
    </>
  );
};

export default ProductImage;
