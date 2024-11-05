import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    mfe1: "http://localhost:4201",
    mfe2: "http://localhost:4202",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.spec.ts",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
