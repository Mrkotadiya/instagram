const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const USER = mongoose.model("USER");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Jwt_secret} = require("../keys");
const requireLogin = require("../middleware/requireLogin");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/signup", (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(422).json({ err: "Please add All The Fills" });
  }

  USER.findOne({ $or: [{ email: email }, { username: username }] }).then(
    (saveUser) => {
      if (saveUser) {
        return res
          .status(422)
          .json({ message: "user already existed with this email" });
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new USER({
          name,
          username,
          email,
          password: hashedPassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "saved Successfully" });
          })
          .catch((err) => {

            console.log(err);
          });
      });
    }
  );
});

router.post("/signin", (req, res) => {
  // res.send({"helvni":"dvinisv"})
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ err: "Please Enter Valid Email And Password" });
  }

  USER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ err: "Email is Invalid" });
    }
    console.log(savedUser);
    bcrypt.compare(password,savedUser.password).then((match) => {
        if (match) {
          // return res.status(200).json({ message: "Signed in Succesffully" });
          const token = jwt.sign({_id:savedUser.id },Jwt_secret);
          console.log({"token":token});
          res.json(token)
        } else {
          return res.status(422).json({ err: "Invalid Password" });
        }
      })
      .catch((err) => console.log(err));
  });
});

router.get('/createpost',requireLogin,(req,res)=>{
  console.log("CreatePOst Auth Hello");

})
module.exports = router;
