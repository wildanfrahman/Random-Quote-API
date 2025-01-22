const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

//middleware
var corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db
const db = require("./models");
db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("drop and resync db");
});

app.get("/", (req, res) => {
  res.json({ message: "welcome to random quote API" });
});

//route
require("./routes/quote.routes")(app);

//port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Berjalan Di Port ${PORT}`);
});
