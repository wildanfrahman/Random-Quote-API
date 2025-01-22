const db = require("../models");
const { sequelize } = require("../models");
const Quote = db.quote;

exports.createQuote = async (req, res) => {
  try {
    const { quote } = req.body;
    const newQuote = await Quote.create({ quote });

    res.status(201).json({
      message: "berhasil menambah data quote",
      data: newQuote,
    });
  } catch (error) {
    res.status(500).json({ message: "gagal menambah data quote" });
  }
};

exports.randomQuote = async (req, res) => {
  try {
    const quote = await Quote.findOne({
      order: sequelize.random(),
    });

    if (quote) {
      res.status(200).json({ message: "data berhasil diambil", data: quote });
    } else {
      res.status(404).json({ message: "quote tidak ditemukan" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "gagal mendapat data quote" });
  }
};
