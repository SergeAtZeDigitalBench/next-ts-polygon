import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "@/types";

export interface SearchState {
  search: string;
  startupPokemon: IPokemon[];
}

const initialState: SearchState = {
  search: "",
  startupPokemon: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupPokemon: (state, action: PayloadAction<IPokemon[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;
