import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { pokemonApi } from "./pokemonApi";

export * from "./searchSlice";
export * from "./pokemonApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    pokemonApi: pokemonApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});
