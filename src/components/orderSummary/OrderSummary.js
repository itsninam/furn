import React, { useState } from "react";
import SubHeader from "../SubHeader";
import Button from "../Button";
import { useProducts } from "../../contexts/ProductsContext";
import CountrySelector from "./CountrySelector";

function OrderSummary() {
  const { cartItems } = useProducts();
  const [userInput, setUserInput] = useState("");

  const totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );

  const getEstimatedTax = () => {
    if (userInput) {
      console.log(0.013 * totalPrice);
      const tax = userInput === "10" ? 0.013 : 0.015;
      return tax;
    }
  };

  const estimatedTax = getEstimatedTax() * totalPrice;

  return (
    <div className="order-summary-container">
      <SubHeader label="Order Summary" />
      <ul className="order-summary-list">
        <li>
          <span>Subtotal</span>
          <span>
            $
            {`${totalPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
          </span>
        </li>
        <li>
          <span>Shipping</span>
          <CountrySelector userInput={userInput} setUserInput={setUserInput} />
        </li>
        <li>
          <span>Estimated tax</span>
          <span>
            {userInput
              ? `$${estimatedTax.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`
              : `$0.00`}
          </span>
        </li>
        <li>
          <span>Total</span>
          <span>
            {userInput
              ? `$${(
                  totalPrice +
                  Number(userInput) +
                  estimatedTax
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}`
              : `$${totalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`}
          </span>
        </li>
        <Button btnType="primary" buttonLabel="Proceed to checkout" />
      </ul>
    </div>
  );
}

export default OrderSummary;
