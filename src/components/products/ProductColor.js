import { useProducts } from "../../contexts/ProductsContext";

function ProductColor({ product, setProductIndex, productIndex }) {
  const { getSelectedProductColor } = useProducts();

  return (
    <div className="colors-container">
      {product.colors.map((color, index) => {
        return (
          <button
            key={index}
            className={`btn-color ${index === productIndex ? "active" : ""}`}
            onClick={() => {
              setProductIndex(index);
            }}
            style={{ backgroundColor: getSelectedProductColor(color) }}
          ></button>
        );
      })}
      <span>
        {product.colors.length}
        {product.colors.length > 1 ? " colors" : " color"}
      </span>
    </div>
  );
}

export default ProductColor;
