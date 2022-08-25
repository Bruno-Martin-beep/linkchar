import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getPopular } from "./getData";

// Slice Object
///////////////////////////////////////

let initialState: {
  list: {}[];
  isLoading: boolean;
  hasError: boolean;
} = {
  list: [],
  isLoading: false,
  hasError: false,
};

export const popularListSlice = createSlice({
  name: "popularList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.list = [...state.list, ...action.payload];
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getPopular.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

// Selectors
///////////////////////////////////////

export const selectPopularList = (state: RootState) => state.popularList;

// Exports
///////////////////////////////////////

export default popularListSlice.reducer;
