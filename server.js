const express = require("express");
const { sequelize } = require("./config/dbconnection");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
require("dotenv").config();

app.use(express.json());

//including route modeule
app.use("/", require("./route/userRoute"));



const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Management API',
      version: '1.0.0',
      description: 'API documentation for user management',
    },
  },
  apis: ['./route/userRoute.js'], // Path to your route files
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
console.log(swaggerDocs); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((req, res) => {
  res.json({ message: "there is no api endpoint " }); //handling wrong end point
});


(async () => {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    // Start the Express server
    app.listen(process.env.PORT, () => {
      console.log(`Server started -> http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit the process if the database connection fails
  }
})();

