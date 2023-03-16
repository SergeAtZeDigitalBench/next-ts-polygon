import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

export * from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
