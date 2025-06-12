import { configureStore } from "@reduxjs/toolkit";
import starReducer from "./StarSlice";

// Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("starredItems");
    if (serializedState === null) return undefined;
    return { star: JSON.parse(serializedState) };
  } catch (error) {
    console.warn("Could not load state", error);
    return undefined;
  }
};

// Save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.star);
    localStorage.setItem("starredItems", serializedState);
  } catch (error) {
    console.warn("Could not save state", error);
  }
};

export const store = configureStore({
  reducer: {
    star: starReducer,
  },
  preloadedState: loadFromLocalStorage(), // load persisted state
});

// Save to localStorage on every store change
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
