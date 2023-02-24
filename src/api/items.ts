import type { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import type { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import type {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/src/query";
import { api } from ".";

type BuilderType = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,
  "Items",
  "exampleApi"
>;

export interface Item {
  name: string
}

interface Response<T> {
  data: T[];
  meta: {
    totalItems: number;
    offset: number;
  };
}

export type SortDirection = "asc" | "desc";

export type GetItemsResponse = Response<Item>;

export type GetItemsQueryArgs = {
  sort?: string;
};

const extendedApi = api.injectEndpoints({
  endpoints: (build: BuilderType) => ({
    getItems: build.query<
      GetItemsResponse,
      GetItemsQueryArgs
    >({
      providesTags: ["Items"],
      query: (params) => ({
        url: "/Items",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetItemsQuery } =
  extendedApi;
