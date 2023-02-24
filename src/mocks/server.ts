import { setupServer } from "msw/node";
import { data } from "./data";
import { createHandlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...createHandlers(data));
