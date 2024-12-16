//  export async function verifyuser  (req) {
//   const result = await user.findOne({ where: { email: req.body.email } });
//   if (result) {
//     ( await bcrypt.compare(req.body.password, result.password))
//       ? console.log("login successfull")
//       : console.log("incorrect password");
//   } else {
//     console.log("check credentaials again");
//   }
// }
async function verifyuser(req) {
    const result = await user.findOne({ where: { email: req.body.email } });
  
    if (result) {
      const isPasswordValid = await bcrypt.compare(req.body.password, result.password);
      if (isPasswordValid) {
        console.log("Login successful");
        return result; // Return userdata for a successful login
      } else {
        console.log("Incorrect password");
        res.status(401).send("Invalid password");
        
      }
    } else {
      console.log("Check credentials again");
      res.status(401).json({ message: "invalid credential" });
    }
  }

  module.exports = { verifyuser };