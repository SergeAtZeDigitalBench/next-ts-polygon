import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";
import { QUERY_CLIENT_CONFIG } from "./config";

const getQueryClient = cache(() => new QueryClient(QUERY_CLIENT_CONFIG));

export default getQueryClient;
