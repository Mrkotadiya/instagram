const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../keys");
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You Must Have Logged in " });
  }
  //   res.json('OK');

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, Jwt_secret, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You Must Have Logged in first" });
    }

    const { _id } = payload;

    USER.findById(_id).then(userdata =>{
         req.user= userdata;
        next();
    })

  });

};
