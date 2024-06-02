import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function TotalCartItems() {
  const { cartItems } = useProducts();

  const totalCartItems =
    cartItems.length > 0 &&
    cartItems
      .map((item) => item.quantity)
      .reduce((acc, curr) => acc + parseInt(curr), 0);

  return (
    <div className="cart-container">
      {totalCartItems && (
        <p className="cart-count">
          <span>{totalCartItems}</span>
        </p>
      )}

      <Link to="cart">
        <IoBagHandleOutline className="cart-icon" />
      </Link>
    </div>
  );
}

export default TotalCartItems;
