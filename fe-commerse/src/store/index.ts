import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
