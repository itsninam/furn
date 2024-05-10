import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import ProductName from "./ProductName";

const ProductImage = ({ product, currentProduct }) => {
  const { onHandleImageHover, isQuickShopVisible, dispatch } = useProducts();

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
          onClick={() => dispatch({ type: "open_quickshop" })}
        >
          Quick Shop
        </button>
      )}
      <ProductName product={product} />
    </div>
  );
};

export default ProductImage;
