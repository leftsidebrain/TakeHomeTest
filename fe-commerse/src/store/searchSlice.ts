import { createSlice } from "@reduxjs/toolkit";

interface Isearch {
  keyword: string | undefined;
}

const initialState: Isearch = {
  keyword: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
