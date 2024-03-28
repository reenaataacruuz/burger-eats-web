const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://buger-eats-qa.vercel.app',
    defaultCommandTimeout:10000,
    viewportWidth: 1366,
    viewportHeight: 780,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
