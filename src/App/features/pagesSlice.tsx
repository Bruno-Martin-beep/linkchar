import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Slice Object
///////////////////////////////////////

let initialState: string = "home";

export const pagesSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    stateHome: (state) => {
      return (state = "home");
    },
    stateSearch: (state) => {
      return (state = "search");
    },
    statePopular: (state) => {
      return (state = "popular");
    },
  },
});

// Selectors
///////////////////////////////////////

export const selectPage = (state: RootState) => state.page;

// Exports
///////////////////////////////////////

export const { stateHome, stateSearch, statePopular } = pagesSlice.actions;

export default pagesSlice.reducer;
