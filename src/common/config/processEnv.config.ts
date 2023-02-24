export const processEnvConfig = {
  IS_DEV: process.env.NODE_ENV === "development",
  IS_TEST: process.env.NODE_ENV === "test",
  IS_STANDALONE: document?.getElementById("app-shell") === null,
};
