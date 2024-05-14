import { useProducts } from "../../contexts/ProductsContext";

import ProductName from "./ProductName";

const ProductImage = ({
  product,
  currentProduct,
  setIsQuickshopModalVisible,
}) => {
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
        <button
          className="btn-quickview"
          onClick={() => setIsQuickshopModalVisible(true)}
        >
          Quick Shop
        </button>
      )}
      <ProductName product={product} />
    </div>
  );
};

export default ProductImage;
