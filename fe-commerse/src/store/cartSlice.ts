import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartState {
  cart: ICart[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const existingProduct = state.cart.find((product) => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeProductFromCart: (state, action) => {
      const index = state.cart.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
