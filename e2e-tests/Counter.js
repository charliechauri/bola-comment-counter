/// <reference types="nightwatch" />

const createTestServer = require('./test-server');
const {
  section,
  indicator,
  increaseButton,
  decreaseButton,
} = require('./selectors/Counter');
let testServer = null;

module.exports = {
  before: (browser, done) => {
    testServer = createTestServer(() => {
      console.log(`Test server started at ${testServer.address().port}`);
      done();
    });
  },
  after: () => {
    testServer.close(() => {
      console.log('Test server stopped');
    });
  },
  Counter: client => {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.title('Counter')
      .assert.visible(section)
      .assert.visible(indicator)
      .assert.containsText(indicator, '00')
      .assert.visible(increaseButton)
      .perform(() => {
        const numberOfClicks = 10;
        let currentClicks = 1;

        while (currentClicks <= numberOfClicks) {
          client.click(increaseButton);
          currentClicks += 1;
        }
      })
      .click(decreaseButton)
      .assert.containsText(indicator, '09')
      .click(increaseButton)
      .assert.containsText(indicator, '10')
      .end();
  },
};
