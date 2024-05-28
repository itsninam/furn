import React from "react";
import { useProducts } from "../contexts/ProductsContext";

function Cart() {
  const { cartItems, dispatch } = useProducts();

  const handleRemoveItem = (item) => {
    dispatch({ type: "remove_item", payload: item });
  };
  return (
    <section>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
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
                    <span>{item.furnitureName}</span>
                    <img
                      src={require(`../assets/images/${item.images.primaryImage}`)}
                      alt={item.furnitureName}
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.quantity * item.price}</td>
                  <td onClick={() => handleRemoveItem(item)}>remove</td>
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
