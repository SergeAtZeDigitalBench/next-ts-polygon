import { QueryClientConfig } from "@tanstack/query-core";

export const DELAY = {
  MINUTES_10: 600_000,
  MINUTES_15: 900_000,
  MINUTES_30: 1_800_000,
  HOUR_1: 3_600_000,
} as const;

const queryErrorHandler = (error: unknown) => {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  // later - we can make some toast message for example.
  console.warn("React Query Error: ", {
    title,
    status: "error",
    variant: "subtle",
    isClosable: true,
  });
};

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: DELAY.MINUTES_10,
      cacheTime: DELAY.MINUTES_15,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onError: queryErrorHandler,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
};
