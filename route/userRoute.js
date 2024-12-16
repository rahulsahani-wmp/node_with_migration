const express = require("express");
const router = express();

const {
  getuserdata,
  getuserdatabyid,
  getuserdatabyemail,
  postuserdata,
  login,
  modifyuserdata,
  deleteuserdata,
} = require("../controller/userControler");

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Successfully retrieved users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userid:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */

router.get("/api/get", getuserdata); //route to get all user

router.get("/api/get/:id", getuserdatabyid); //route to get user by id

router.get("/api/get/email", getuserdatabyemail); //route to get user by email

router.post("/api/post", postuserdata); //route to post user data

router.get("/api/login", login);

router.put("/api/put/:id", modifyuserdata); //route to modify user data

router.delete("/api/delete/:id", deleteuserdata);

module.exports = router;
