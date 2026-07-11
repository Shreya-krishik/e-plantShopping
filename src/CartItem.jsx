import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increase = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="120"
            />

            <div className="cart-details">
              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total Cost: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => decrease(item)}>
                -
              </button>

              <button onClick={() => increase(item)}>
                +
              </button>

              <button
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;