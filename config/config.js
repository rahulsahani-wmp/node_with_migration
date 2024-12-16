require('dotenv').config({ path: `${process.cwd()}/.env` });


module.exports={
  "development": {
   
  username: process.env.user,
  password: process.env.dbpassword,
  database: process.env.databasename,
  host: process.env.host,
  dialect: process.env.dialect
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
