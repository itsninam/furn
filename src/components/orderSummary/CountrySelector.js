import React from "react";
import { useProducts } from "../../contexts/ProductsContext";

function CountrySelector({ userInput, setUserInput }) {
  const { cartItems } = useProducts();
  return (
    <select
      name="countrySelector"
      id="countrySelector"
      value={userInput}
      onChange={(event) => setUserInput(event.target.value)}
      disabled={cartItems.length === 0}
    >
      <option>select country</option>
      <option value="20">Canada $20.00</option>
      <option value="10">United States $10.00</option>
    </select>
  );
}

export default CountrySelector;
