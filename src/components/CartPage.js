import React from "react";
import Cart from "./Cart";
import OrderSummary from "./orderSummary/OrderSummary";

function CartPage() {
  return (
    <section className="cart">
      <div className="flex-container">
        <Cart />
        <OrderSummary />
      </div>
    </section>
  );
}

export default CartPage;
