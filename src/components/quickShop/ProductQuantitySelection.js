import { useProducts } from "../../contexts/ProductsContext";

function ProductQuantitySelection({ handleAddToBasket }) {
  const { userInput, dispatch } = useProducts();

  return (
    <form onSubmit={handleAddToBasket}>
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
      <button type="submit">Add to basket</button>
    </form>
  );
}

export default ProductQuantitySelection;
