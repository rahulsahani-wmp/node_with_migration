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
 *                 userid:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */

router.get("/api/users", getuserdata); //route to get all user

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the user by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userid:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: User not found
 */
router.get("/api/user/:id", getuserdatabyid); //route to get user by id

router.get("/api/find", getuserdatabyemail); // route to get user by email


/**
 * @swagger
 * /api/post:
 *   post:
 *     summary: Post user data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Successfully created user
 *       400:
 *         description: Invalid input
 */

router.post("/api/post", postuserdata); //route to post user data

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       401:
 *         description: Invalid credentials
 */
router.post("/api/login", login);


/**
 * @swagger
 * /api/put/{id}:
 *   put:
 *     summary: Modify user data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to modify
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully modified the user data
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */
router.put("/api/put/:id", modifyuserdata); //route to modify user data

/**
 * @swagger
 * /api/delete/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the user
 *       404:
 *         description: User not found
 */
router.delete("/api/delete/:id", deleteuserdata);

module.exports = router;

// inside login
// parameters:
//  *       - in: query
//  *         name: email
//  *         required: true
//  *         description: The email of the user
//  *         schema:
//  *           type: string
//  *           format: email
//  *       - in: query
//  *         name: password
//  *         required: true
//  *         description: The password of the user
//  *         schema:
//  *           type: string