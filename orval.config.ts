import { defineConfig } from "orval";

export default defineConfig({
  register: {
    input: "http://localhost:3333/docs/json",
    output: {
      target: "./src/api/http.ts",
      client: "fetch",
      httpClient: "fetch",
      clean: true,
      baseUrl: "http://localhost:3333",
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
});
