const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/database.json");

//function to validate modified user (request body)
exports.validateputdata = (req) => {
  //validate datatype of request body
  if (
    typeof req.body.name !== "string" ||
    typeof req.body.balance !== "number"
  ) {
    return { success: false, error: "Invalid datatype of input" };
  }
  //validation for empty request body
  else if (!req.body.name || !req.body.balance) {
    return { success: false, error: "Value is empty in request body" };
  }
  //validation for missing filed in request body
  else if (Object.keys(req.body).length !== 2) {
    return { success: false, error: "Missing field in request body" };
  }
  return true;
};

//function to validate add new user (request body)
exports.validateregisteruser = (req) => {
  if (
    !Number.isInteger(req.body.id) ||
    typeof req.body.name !== "string" ||
    typeof req.body.balance !== "number"
  ) {
    return { success: false, error: "Invalid datatype of input" };
  } else if (!req.body.id || !req.body.name || !req.body.balance) {
    return { success: false, error: "Value is empty in request body" };
  } else if (Object.keys(req.body).length !== 3) {
    return { success: false, error: "Missing field in request body" };
  }

  return { success: true };
};

// function to read data of user from database
