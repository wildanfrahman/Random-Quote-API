let config;

if (process.env.NODE_ENV === "production") {
  config = require("./db.config.prod");
} else {
  config = require("./db.config.dev");
}

module.exports = config;
