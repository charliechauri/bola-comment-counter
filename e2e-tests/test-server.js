function createTestServer(done) {
  const express = require('express');
  const app = express();

  app.use(express.static('src'));

  const server = app.listen(3000, () => {
    done();
  });
  return server;
}

module.exports = createTestServer;
