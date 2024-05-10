import { useProducts } from "../contexts/ProductsContext";

const ProductImage = ({ product }) => {
  const { onHandleImageHover, isQuickShopVisible } = useProducts();

  return (
    <>
      {product.images.map((image, index) => {
        return (
          <div className="image-container">
            <img
              key={index}
              src={require(`../assets/images/${image.primaryImage}`)}
              onMouseOver={(event) =>
                onHandleImageHover(event, image.secondaryImage, "mouseOver")
              }
              onMouseOut={(event) =>
                onHandleImageHover(event, image.primaryImage, "mouseOut")
              }
              alt={product.furnitureName}
            />
            {isQuickShopVisible === image.secondaryImage ? (
              <button>Quick Shop</button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default ProductImage;
