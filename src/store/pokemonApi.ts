import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { NEXT_PUBLIC_BASE_API } from "@/constants";
import { IPokemon } from "@/types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEXT_PUBLIC_BASE_API }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    search: builder.query<IPokemon[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: "pokemon", search }],
    }),
  }),
});
