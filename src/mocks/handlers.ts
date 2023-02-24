import { API_BASE_URL } from "@example-mf/api";
import { GetItemsResponse, Item } from "@example-mf/api/items";
import { rest } from "msw";

export function createHandlers(data: Item[]) {
  return [
    rest.get<GetItemsResponse>(
      `${API_BASE_URL}/subscriptions`,
      (_req, res, ctx) =>
        res(
          ctx.json({
            data,
            meta: {
              totalItems: data.length,
            },
          }),
        ),
    ),
  ];
}
