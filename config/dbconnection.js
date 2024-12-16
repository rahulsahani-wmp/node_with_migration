const { Sequelize } = require("sequelize");
const { development } = require("../config/config");
require("dotenv").config();

const sequelize = new Sequelize(development); //connect to db

module.exports = {
  sequelize,
};
