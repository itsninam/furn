import React from "react";

function ProductQuantitySelection() {
  return (
    <form>
      <select name="productQuantity" id="productQuantity">
        {Array.from(Array(10), (e, i) => {
          return <option value={i + 1}>{i + 1}</option>;
        })}
      </select>
      <button>Add to basket</button>
    </form>
  );
}

export default ProductQuantitySelection;
