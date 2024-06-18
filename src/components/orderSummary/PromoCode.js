import React from "react";
import Button from "../Button";
import { useProducts } from "../../contexts/ProductsContext";

function PromoCode() {
  const { promoCode, dispatch, cartItems } = useProducts();

  console.log(promoCode);

  const handleSubmitPromoCode = (event) => {
    event.preventDefault();

    if (!promoCode) {
      alert("Please enter promo code");
    } else if (promoCode.toLowerCase() !== "loremipsum") {
      alert("incorrect code");
    } else {
      alert("correct!");
      handlePromoInput(event);
    }
  };

  const handlePromoInput = (event) => {
    event.preventDefault();
    dispatch({ type: "apply_promo", payload: event.target.value });
  };

  console.log(promoCode);
  return (
    <form onSubmit={() => handleSubmitPromoCode()}>
      <div>
        <label>Promo Code</label>
        <input
          disabled={cartItems.length === 0}
          value={promoCode}
          onChange={(event) => handlePromoInput(event)}
        />
      </div>
      <Button
        btnType="primary"
        buttonLabel="Apply"
        type="submit"
        disabled={cartItems.length === 0}
      />
    </form>
  );
}

export default PromoCode;
