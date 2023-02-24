import { setupWorker } from "msw";
import { data } from "./data";
import { createHandlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...createHandlers(data));
