import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starredItems: [],
};

const starSlice = createSlice({
  name: "star",
  initialState,
  reducers: {
    addStarredItem: (state, action) => {
      const exists = state.starredItems.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.starredItems.push(action.payload);
      }
    },
    removeStarredItem: (state, action) => {
      state.starredItems = state.starredItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addStarredItem, removeStarredItem } = starSlice.actions;
export default starSlice.reducer;
