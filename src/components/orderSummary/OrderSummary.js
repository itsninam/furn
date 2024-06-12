import SubHeader from "../SubHeader";
import Button from "../Button";
import { useProducts } from "../../contexts/ProductsContext";
import CountrySelector from "./CountrySelector";

function OrderSummary() {
  const { cartItems, shippingSelection } = useProducts();

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
            {shippingSelection
              ? `$${(
                  totalPrice +
                  Number(shippingSelection) +
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
