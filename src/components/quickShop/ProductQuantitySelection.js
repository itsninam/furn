import { useProducts } from "../../contexts/ProductsContext";
import Button from "../Button";

function ProductQuantitySelection({ handleAddToBasket, buttonLabel }) {
  const { userInput, dispatch } = useProducts();

  return (
    <form onSubmit={handleAddToBasket} className="product-quantity-form">
      <select
        name="productQuantity"
        id="productQuantity"
        value={userInput}
        onChange={(event) =>
          dispatch({ type: "user_input", payload: event.target.value })
        }
      >
        <option>select</option>
        {Array.from(Array(10), (e, i) => {
          return (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <Button
        type="submit"
        btnType="primary"
        buttonLabel={buttonLabel ? buttonLabel : "Add to basket"}
      />
    </form>
  );
}

export default ProductQuantitySelection;
