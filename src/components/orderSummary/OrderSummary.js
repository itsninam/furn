import SubHeader from "../SubHeader";
import Button from "../Button";
import { useProducts } from "../../contexts/ProductsContext";
import CountrySelector from "./CountrySelector";
import PromoCode from "./PromoCode";

function OrderSummary() {
  const { cartItems, shippingSelection, promoCodeApply, promoCode } =
    useProducts();

  const totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );

  const getEstimatedTax = () => {
    if (shippingSelection) {
      const tax = shippingSelection === 10 ? 0.013 : 0.015;
      return tax;
    }
  };

  const estimatedTax = getEstimatedTax() * totalPrice;

  const priceTotal = shippingSelection
    ? totalPrice + Number(shippingSelection) + estimatedTax
    : totalPrice;

  return (
    <div className="order-summary">
      <SubHeader label="Order Summary" />
      <div className="order-summary-container">
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
            <CountrySelector />
          </li>
          <li>
            <span>Estimated tax</span>
            <span>
              {shippingSelection
                ? `$${estimatedTax.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`
                : `$0.00`}
            </span>
          </li>
          <li>
            <span>Total</span>
            <span>
              $
              {promoCodeApply === promoCode.toLowerCase()
                ? (priceTotal - (priceTotal * 20) / 100).toLocaleString(
                    undefined,
                    { minimumFractionDigits: 2 }
                  )
                : priceTotal.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
            </span>
          </li>
          <PromoCode />
        </ul>
        <Button btnType="primary" buttonLabel="Proceed to checkout" />
      </div>
    </div>
  );
}

export default OrderSummary;
