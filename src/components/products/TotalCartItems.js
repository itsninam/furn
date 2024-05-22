import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { IoBagHandleOutline } from "react-icons/io5";

function TotalCartItems() {
  const { cartItems } = useProducts();

  const totalCartItems =
    cartItems.length > 0 &&
    cartItems
      .map((item) => item.quantity)
      .reduce((acc, curr) => acc + parseInt(curr), 0);

  return (
    <div className="cart-container">
      <p>{totalCartItems}</p>
      <IoBagHandleOutline className="cart-icon" />
    </div>
  );
}

export default TotalCartItems;
