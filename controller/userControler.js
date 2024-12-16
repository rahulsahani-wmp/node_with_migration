const userService = require("../services/userService");

//controller for get user
const getuserdata = async (req, res) => {
  try {
    const userdata = await userService.getusers();

    if (userdata)
      res.status(200).json({ message: "all users ", users: userdata });
    else res.status(404).json({ message: "no users available" });
  } catch (error) {
    res.status(500).json({ message: "internal server error " + error });
  }
};

//controller for get user by id
const getuserdatabyid = async (req, res) => {
  try {
    const userdata = await userService.getuserbyid(parseInt(req.params.id));

    if (userdata) {
      res.json(userdata);
    } else {
      res.status(404).json({ message: "user not found" });
    } //handling if user not found
  } catch {
    res.status(500).json({ message: "internal server error " });
  }
};

//controller for get user by id
const getuserdatabyemail = async (req, res) => {
  try {
    const userdata = await userService.getuserbyemail(req);

    if (userdata) {
      res.json(userdata);
    } else {
      res.status(404).json({ message: "user not found" });
    } //handling if user not found
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: "internal server error " });
  }
};

//controller for post user data
const postuserdata = async (req, res) => {
  try {
    //adding user
    const userdata = await userService.registeruser(req);
    console.log("this is in controller", userdata);

    if (userdata)
    { 
      res.status(201).json({
        message: "User added successfully",
        User: userdata,
      });}
    else 
      res.status(404).json({ message: "user already exist" }); //returning response if user already exist
    }
   catch (error) {
    res.status(500).json({ message: "internal server error" + error });
  }
};

const login = async (req, res) => {
  try {
    const userdata = await userService.login(req,res);
    console.log("inside controller" , userdata.status)
    if (userdata.status==true)
      { 
        res.status(201).json({
          message: "successfully login",
          User: userdata.user,
        });}
      else if(userdata.status==false) {
        res.status(409).json({ message: userdata.error }); //returning response if user already exist
      }
    } catch (error) {
      res.status(500).json({ message: "internal server error" + error });
    }
};

//controller for modifing data
const modifyuserdata = (req, res) => {
  try {
    // validating response body

    //modifing user data
    const userdata = userService.modifydata(req);
    if (userdata)
      res.json({
        message: "user updated successfully",
        updated_user: userdata,
      });
    else res.status(404).json({ message: "user not found" });
  } catch {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

//controller for delete user
const deleteuserdata = async (req, res) => {
  try {
    const userdata = await userService.deleteuser(req); //delete user service call

    if (userdata)
      res.json({
        message: "user deleted successfully",
        User: userdata,
      });
    else {
      res.status(404).json({ message: "user not found" });
    }
  } catch {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  getuserdata,
  getuserdatabyid,
  getuserdatabyemail,
  postuserdata,
  login,
  modifyuserdata,
  deleteuserdata,
};
