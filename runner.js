const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjRhNzM5NzEyLTY5ZWMtNDA2Ny1iMWJjLTVhMWQ4Yzk0MTNhNi0xNzQ2MjMxMzg2MTAxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMDhjYzFjZWQtOGNhOS00ODQzLWE2MDEtZmE4MzQ4YWU4YjcwIiwidHlwZSI6InQifQ.yJeiewG5FxHpCtUb5-erJBgCj3FYOdG3V79-HxGy_j4',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})