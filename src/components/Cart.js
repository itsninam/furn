import React from "react";
import { useProducts } from "../contexts/ProductsContext";
import { FaRegTrashAlt } from "react-icons/fa";
import SubHeader from "./SubHeader";

function Cart() {
  const { cartItems, dispatch } = useProducts();

  const handleRemoveItem = (item) => {
    dispatch({ type: "remove_item", payload: item });
  };
  return (
    <section>
      <SubHeader label="Basket" className="cart-header" />
      {cartItems.length === 0 ? (
        <p className="empty-basket">Your basket is empty</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>

            {cartItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="item-container">
                      <img
                        src={require(`../assets/images/${item.images.primaryImage}`)}
                        alt={item.furnitureName}
                      />
                      <div className="item-info">
                        <span>{item.furnitureName}</span>
                        <span>Color: {item.colors}</span>
                      </div>
                    </div>
                  </td>
                  <td>${item.price.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.quantity * item.price).toLocaleString()}</td>
                  <td onClick={() => handleRemoveItem(item)}>
                    <FaRegTrashAlt className="remove-icon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Cart;
