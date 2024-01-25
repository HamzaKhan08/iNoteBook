const express = require("express"); // importing express server
const router = express.Router(); // importing router from express server
const User = require("../models/User"); // importing User from models/User folder
const bcrypt = require('bcryptjs');  // bcrypt is a salt layer used for extra safety of user login system
const { body, validationResult } = require("express-validator"); // importing express-validator
var jwt = require('jsonwebtoken');  // importing jwt to use for security of site.
var fetchuser = require("../middleware/fetchuser");  // importing fetchuser from middleware/fetchuser

const JWT_SECRET = 'hamzakhan23$';


// Route 1:  Create a User using POST "/api/auth/createuser", No login Required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password of length 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    // just posting the req, and simply we create a arrow function in which we are passing req, res with the help of router
    //console.log(req.body);  // Console in which u get an output
    //const user = User(req.body); //creating a user to request body from User
    //user.save();  // here user save function is used to save data
    // if there are errors, return bad request or errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      // a try and catch method is used to check for any error or uncertainity.
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // if user with same credential exist then
        return res
          .status(400) // hamko ye wala message dekhega
          .json({ success, error: "Sorry a user is already exist with this email.." });
      }

      // creating a salt, and implementing bcrypt.genSalt(10): which generate salts automatically
      const salt = await bcrypt.genSalt(10);
      // creating a secPass name variable which work to create a hash of passwords
      const secPass = await bcrypt.hash(req.body.password, salt);

      // create new user
      user = await User.create({
        // using await it means the certain part of code will wait for response but after that line all code will run smoothly.
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data  = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success, authToken});   // sending response to server

    } catch (error) {   // catching an error if occurred.
      console.error(error.message);
      res.status(500).send("Internal Server error occurred!");
    }
  }
);


// Route 2 :  Authenticate a user using POST "/api/auth/login", No login required

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password of length 5").exists(),
  ], async (req, res) => {
    // if there are errors, return bad request or errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;   // hamne yaha pe destructuring use kiya hai like {email, password} jisko ham req krre hai uske body ko like req.body
    try {
      let user = await User.findOne({email});
      if(!user) {   // agar user nai hai database ke andar then below message will display
        return res.status(400).json({error: "Try to login with correct credentials!"});
      }

      const passwordCompare = await bcrypt.compare(password, user.password);  // creating a passwordCompare const, in which bcrypt.compare method is used to match password with user.password.
      if(!passwordCompare) {    // agar password match nai hua then below message will display
        success = false;
        return res.status(400).json({success, error: "Try to login with correct credentials!"});
      }

      const data  = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken});

    } catch (error) {   // catching an error if occurred.
      console.error(error.message);
      res.status(500).send("Internal Server error occurred!");
    }


  });



// Route 3 :  Get user login details using  POST "/api/auth/getuser", login required

router.post(
  "/getuser", fetchuser, async (req, res) => {

try {
  const userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user);
} catch (error) {   // catching an error if occurred.
  console.error(error.message);
  res.status(500).send("Internal Server error occurred!");
}
});


module.exports = router; // exporting router to use in any other project
