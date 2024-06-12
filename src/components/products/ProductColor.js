import { useProducts } from "../../contexts/ProductsContext";
import { useLocation } from "react-router-dom";

function ProductColor({
  product,
  setProductIndex,
  productIndex,
  setProductImage,
  isColorNameVisible,
  isNumColorVisible,
  currentProducts,
}) {
  const { getSelectedProductColor, setIsProductFiltered } = useProducts();
  const location = useLocation();

  const handleSelectColor = (color, id, index) => {
    setProductIndex(index);
    if (location.pathname.includes("/quickshop")) {
      const colorParam = new URLSearchParams(location.search);

      colorParam.set("color", color);

      window.history.replaceState({}, "", `?${colorParam.toString()}`);
    } else {
      setProductImage(
        currentProducts
          .find((product) => product.id === id)
          .options.find((option) => option.color === color)
      );
      setIsProductFiltered(false);
    }
  };

  return (
    <>
      {isColorNameVisible && (
        <p>
          Color:{" "}
          {product.options.flatMap((option) => option)[productIndex].color}
        </p>
      )}

      <div className="colors-container">
        {product.options.map((option, index) => {
          return (
            <button
              key={index}
              className={`btn-color ${index === productIndex ? "active" : ""}`}
              onClick={() => handleSelectColor(option.color, product.id, index)}
              style={{ backgroundColor: getSelectedProductColor(option.color) }}
            ></button>
          );
        })}

        {isNumColorVisible && (
          <span>
            {product.options.length}
            {product.options.length > 1 ? " colors" : " color"}
          </span>
        )}
      </div>
    </>
  );
}

export default ProductColor;
