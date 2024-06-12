import React from "react";
import { useProducts } from "../../contexts/ProductsContext";

function CountrySelector() {
  const { cartItems, dispatch, shippingSelection } = useProducts();
  return (
    <select
      name="countrySelector"
      id="countrySelector"
      value={shippingSelection}
      onChange={(event) =>
        dispatch({ type: "shipping_selection", payload: event.target.value })
      }
      disabled={cartItems.length === 0}
    >
      <option value={0}>select country</option>
      <option value={20}>Canada $20.00</option>
      <option value={10}>United States $10.00</option>
    </select>
  );
}

export default CountrySelector;
