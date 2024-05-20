import { useLocation } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";

function ProductColor({
  product,
  setProductIndex,
  productIndex,
  setImageIndex,
  isColorNameVisible,
  isNumColorVisible,
}) {
  const { getSelectedProductColor } = useProducts();
  const location = useLocation();

  const handleSelectColor = (index) => {
    setProductIndex(index);

    if (location.pathname !== "/dining-tables") {
      setImageIndex(0);
    }
  };

  return (
    <>
      {isColorNameVisible && <p>Color: {product.colors[productIndex]}</p>}

      <div className="colors-container">
        {product.colors.map((color, index) => {
          return (
            <button
              key={index}
              className={`btn-color ${index === productIndex ? "active" : ""}`}
              onClick={() => handleSelectColor(index)}
              style={{ backgroundColor: getSelectedProductColor(color) }}
            ></button>
          );
        })}

        {isNumColorVisible && (
          <span>
            {product.colors.length}
            {product.colors.length > 1 ? " colors" : " color"}
          </span>
        )}
      </div>
    </>
  );
}

export default ProductColor;
