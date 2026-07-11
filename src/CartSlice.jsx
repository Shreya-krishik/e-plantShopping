import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateTotals = (state) => {
  state.totalItems = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (plant) => plant.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      calculateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (plant) => plant.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      calculateTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (plant) => plant.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (plant) => plant.id !== action.payload
      );

      calculateTotals(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;