const { App } = require("genart-server");

class Root extends App {
  get(req, res) {
    res.apiResponse();
  }
}

module.exports = Root;
