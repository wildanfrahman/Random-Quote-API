const controller = require("../controllers/quote.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  //Create
  app.post("/api/quote", controller.createQuote);

  app.get("/api/randomquote", controller.randomQuote);
};
