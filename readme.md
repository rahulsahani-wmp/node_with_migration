# Node.js Project with Sequelize and Migrations

## Overview
This project is built using **Node.js** and **Sequelize**, an ORM for Node.js that supports SQL-based databases like MySQL, PostgreSQL, SQLite, and MSSQL. The project includes database migrations to manage schema changes and data transformations efficiently.

## Features
- **Database Management**: Sequelize ORM for handling database operations.
- **Migrations**: Database schema changes are managed via migrations.
- **Scalability**: Modular and extensible architecture.

## Prerequisites
Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) 
- A supported SQL database (PostgreSQL)

## Getting Started

1. Clone the repository:
   ```bash
   git clone 
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database connection:
   Update the `config/config.json` file (for Sequelize) with your database credentials:
   ```json
   {
     "development": {
       "username": "your-username",
       "password": "your-password",
       "database": "your-database-name",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

4. Run migrations to set up the database schema:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Project Structure
```
.
├── config/
│   ├── config.json  # Database configurations
├── migrations/
│   └── [timestamp]-[migration-name].js  # Migration files
├── models/
│   ├── index.js     # Sequelize setup
│   └── [model-name].js  # Model definitions
├── routes/
│   └── [your-routes].js  # API routes
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Using Sequelize CLI

### Create a Model
To create a new model and its corresponding migration:
```bash
npx sequelize-cli model:generate --name ModelName --attributes key1:type1,key2:type2
```
Example:
```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
```

### Run Migrations
To apply all pending migrations:
```bash
npx sequelize-cli db:migrate
```

### Undo Migrations
To undo the last migration:
```bash
npx sequelize-cli db:migrate:undo
```

## Scripts

### Development
```bash
npm run dev
```
Runs the project in development mode with live reloading.


## Dependencies
- **sequelize**: SQL ORM for Node.js
- **sequelize-cli**: CLI tool for Sequelize
- **dotenv**: Load environment variables from `.env`


