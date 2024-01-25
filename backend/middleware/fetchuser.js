var jwt = require("jsonwebtoken"); // importing jwt to use for security of site.
const JWT_SECRET = "hamzakhan23$"; // importing jwt secret string


function fetchuser(req, res, next) {
  // Get the user from the jwt token and add it to req object
  const token = req.header("auth-token");
  if (!token) { // agar token na match ho then ye wala error 
    res.status(401).send({ error: "Please authenticate using a valid token!" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next(); // agar sabkuch theek hua matlb login ke time pe token match hua then next wala function run krega
  } catch (error) { // agar next mai koi error aaya then ye wala error show hoga
    res.status(401).send({ error: "Please authenticate using a valid token!" });
  }
}

module.exports = fetchuser;
