import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

import ProductName from "./ProductName";

const ProductImage = ({ product, selectedImage }) => {
  const { onHandleImageHover, isQuickShopBtnVisible } = useProducts();

  return (
    <>
      <Link
        to={{
          pathname: "quickshop",
          search: `?item=${product.id}&color=${selectedImage.color}`,
        }}
        className="image-container"
        onMouseOver={(event) =>
          onHandleImageHover(
            event,
            selectedImage.images.secondaryImage,
            "mouseOver"
          )
        }
        // onMouseOut={(event) =>
        //   onHandleImageHover(
        //     event,
        //     selectedImage.images.primaryImage,
        //     "mouseOut"
        //   )
        // }
      >
        <img
          src={require(`../../assets/images/${selectedImage.images.primaryImage}`)}
          alt={product.name}
        />
        {isQuickShopBtnVisible === selectedImage.images.secondaryImage && (
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
