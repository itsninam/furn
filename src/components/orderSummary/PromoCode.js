import Button from "../Button";
import { useProducts } from "../../contexts/ProductsContext";

function PromoCode() {
  const {
    promoCodeInput,
    dispatch,
    cartItems,
    promoCodeValidation,
    promoCode,
    promoCodeMessage,
  } = useProducts();

  const handleSubmitPromoCode = (event) => {
    event.preventDefault();

    if (!promoCodeInput) {
      dispatch({
        type: "apply_promo",
        payload: promoCodeInput.toLowerCase(),
      });
    } else if (promoCodeInput.toLowerCase() !== promoCode.toLowerCase()) {
      dispatch({
        type: "apply_promo",
        payload: promoCodeInput.toLowerCase(),
      });
    } else {
      dispatch({ type: "apply_promo", payload: promoCodeInput.toLowerCase() });
    }
  };

  const handlepromoCodeInput = (event) => {
    event.preventDefault();
    dispatch({ type: "obtain_promo", payload: event.target.value });
  };

  return (
    <div className="promo-form-container">
      <form onSubmit={handleSubmitPromoCode} className="promo-form">
        <div>
          <label>Promo Code</label>
          <input
            disabled={cartItems.length === 0}
            value={promoCodeInput}
            onChange={(event) => handlepromoCodeInput(event)}
          />
        </div>
        <Button
          btnType="primary"
          buttonLabel="Apply"
          type="submit"
          disabled={cartItems.length === 0}
        />
      </form>

      <p>
        <span
          className={promoCodeValidation === "invalid" ? "invalid-promo" : ""}
        >
          {promoCodeMessage}
        </span>
      </p>
    </div>
  );
}

export default PromoCode;
