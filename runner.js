const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
require('dotenv').config();

cypress.run({
  // specs to run here
})
  .then((results) => {
    const args = {
      target: process.env.TESULTS_TOKEN,
    }
    tesults.results(results, args);
  })
  .catch((err) => {
    console.error(err)
  })