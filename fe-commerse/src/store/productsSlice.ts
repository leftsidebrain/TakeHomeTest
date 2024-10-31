import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import getProducts from "./productsThunk";

// Interface untuk produk
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

// Interface untuk state produk
interface ProductsState {
  products: Product[];
  product: Product;
}

// Initial state untuk products
const initialState: ProductsState = {
  products: [],
  product: {
    id: 0,
    name: "",
    price: 0,
    img: "",
    category: "",
  },
};
export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await fetch("https://takehometest-production.up.railway.app/products");
  const data = await response.json();
  return data.data;
});

export const getProduct = createAsyncThunk("getById", async (id: number) => {
  const response = await fetch(`https://takehometest-production.up.railway.app/product/${id}`);
  const data = await response.json();
  return data.data;
});
// Buat slice untuk products
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Mendaftarkan action yang dikirim oleh API
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

// Ekspor actions dan reducer
export default productSlice.reducer;
