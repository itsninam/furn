import React, { useEffect, useRef } from "react";
import { useProducts } from "../contexts/ProductsContext";
import { FaRegTrashAlt } from "react-icons/fa";
import SubHeader from "./SubHeader";

function Cart() {
  const { cartItems, dispatch, isMobileView } = useProducts();

  const handleRemoveItem = (item) => {
    dispatch({ type: "remove_item", payload: item });
  };

  const itemInfoRefs = useRef([]);
  const quantityRefs = useRef([]);
  const removeItemRefs = useRef([]);

  const setElementPosition = (element, index, top, extraAmount) => {
    isMobileView
      ? (element.current[index].style.top = `${top + extraAmount}px`)
      : (element.current[index].style.top = "0px");
  };

  useEffect(() => {
    if (itemInfoRefs.current.length === 0) return;

    itemInfoRefs.current.forEach((itemInfoElement, index) => {
      if (itemInfoElement) {
        const top = itemInfoElement.getBoundingClientRect().top;
        const scrollTop = window.scrollY;
        const absoluteTop = top + scrollTop;

        if (quantityRefs.current[index]) {
          setElementPosition(removeItemRefs, index, absoluteTop, 24);
          setElementPosition(quantityRefs, index, absoluteTop, 4);
        }
      }
    });
    // eslint-disable-next-line
  }, [isMobileView]);

  return (
    <div className="cart-content">
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
                        <span ref={(el) => (itemInfoRefs.current[index] = el)}>
                          Color: {item.colors}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>${item.price.toLocaleString()}</td>
                  <td ref={(el) => (quantityRefs.current[index] = el)}>
                    {item.quantity}
                  </td>
                  <td className="totalPrice">
                    ${(item.quantity * item.price).toLocaleString()}
                  </td>
                  <td
                    ref={(el) => (removeItemRefs.current[index] = el)}
                    onClick={() => handleRemoveItem(item)}
                    className="remove-item"
                  >
                    <FaRegTrashAlt className="remove-cart-item-icon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
