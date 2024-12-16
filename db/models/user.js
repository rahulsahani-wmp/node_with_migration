'use strict';
const {
  Sequelize
} = require('sequelize');
const { sequelize } = require('../../config/dbconnection');


module.exports=sequelize.define('user',{
  userid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique:true
  },
  password: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
 
}, {
  
  freezeTableName:true,
  modelName:'user'
})