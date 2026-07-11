import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
      />

      <div className="cart-details">
        <h3>{item.name}</h3>

        <p>
          <strong>Unit Price:</strong> ${item.price}
        </p>

        <p>
          <strong>Quantity:</strong> {item.quantity}
        </p>

        <p>
          <strong>Total:</strong> ${item.price * item.quantity}
        </p>

        <div className="cart-buttons">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            −
          </button>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>

          <button
            className="delete-btn"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;