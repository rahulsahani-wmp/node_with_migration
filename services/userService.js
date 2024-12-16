const user = require("../db/models/user");
const bcrypt = require("bcryptjs");
const { verifyuser } = require("../middleware/userAuthenticate");

//get all user
exports.getusers = async () => {
  const result = await user.findAll(); //fetch user data from db (we get a arry format)
  if (result) {
    return result;
  } else return null;
};

//get user by id
exports.getuserbyid = async (id) => {
  const result = await user.findOne({ where: { userid: id } }); //fetch user data from db
  if (result) {
    return result;
  } else return null;
};

//get user by email
exports.getuserbyemail = (req) => {
  const { email } = req.body; //destructure
  const result = user.findOne({ where: { email: email } }); //fetch user by emailid
  if (result) {
    return result;
  } else return null;
};

exports.registeruser = async (req) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userdata = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    const similaruser = await user.findOne({
      where: { email: req.body.email },
    }); //check for same user
    if (!similaruser) {
      const result = await user.create(userdata); //add user
      return result.dataValues;
    } else throw new Error("same email already exist"); // this error will move to catch block
  } catch (error) {
    console.log("inside registeruser service:", error);
    return null;
  }
};

exports.login = async (req)=>{
  const result = await user.findOne({ where: { email: req.body.email } });

  if (result) {
    const isPasswordValid = await bcrypt.compare(req.body.password, result.password);
    if (isPasswordValid) {
      console.log("Login successful");
      return result; // Return userdata for a successful login
    } else {
      console.log("Incorrect password");
      return {error:"incorrect password"}
      
    }
  } else {
    console.log("Check credentials again");
    return {error:"invalid credential"}
  }
}


//service to modify data
exports.modifydata = async (req) => {
  const result = await user.update(
    { name: req.body.name, email: req.body.email },
    {
      where: {
        userid: parseInt(req.params.id),
      },
    }
  );
  if (result != 0) {
    const updateduser = await user.findOne({
      where: { userid: parseInt(req.params.id) },
    }); //fetch updated user from db
    return updateduser;
  } else {
    return null;
  }
};

exports.deleteuser = async (req) => {
  const deleteduser = await user.destroy({
    where: { userid: parseInt(req.params.id) },
  }); //delete user

  if (deleteduser != 0) {
    //deleteuser will store nos of rows deleted
    return deleteduser;
  } else {
    return null;
  }
};
