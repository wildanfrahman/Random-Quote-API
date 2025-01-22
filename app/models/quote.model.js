const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Quote = sequelize.define(
    "quotes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quote: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Quote;
};
