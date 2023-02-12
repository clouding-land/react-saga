import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: ""
  },
  reducers: {
    fetchAllProducts: (state) => {
      state.status = "fetching";
    },
    setProducts: (state, action) => {
      console.log("With in setProducts Reducer");
      state.products.push(...action.payload);
      state.status = "fetched";
    }
  }
});

export const { fetchAllProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
