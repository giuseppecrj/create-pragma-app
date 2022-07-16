require("dotenv/config");

const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const bodyParser = require("body-parser");
const http = require("genart-server/http");

http.init({
  middlewares: [
    helmet(),
    cors({ origin: true }),
    compression(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json({
      extended: true,
      limit: "5mb",
    }),
  ],
  services: `${__dirname}/routes`,
});
