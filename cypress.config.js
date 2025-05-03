const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://buger-eats-qa.vercel.app',
    defaultCommandTimeout:10000,
    env: {
      AMBIENT: process.env.AMBIENT,
    },
    viewportHeight: process.env.AMBIENT == "web" ? 1080 : 760,
    viewportWidth: process.env.AMBIENT == "web" ? 1366 : 360,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
