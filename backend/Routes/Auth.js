const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const USER = mongoose.model("USER");

const bcrpt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/signup", (req, res) => {
  const { name, username, email, password } = req.body;

  if(!name || !username || !email || !password ){
     return res.status(422).json({err:"Please add All The Fills"});
  }

  USER.findOne({$or:[{email:email},{username:username}]
      
  }).then((saveUser)=>{
      if(saveUser){
          return res.status(422).json({err:"user already existed with this email"})
      }
      bcrpt.hash(password,12).then((hashedPassword)=>{
        
          const user = new USER({
            name,
            username,
            email,
            password:hashedPassword,
          });

          user.save()
          .then((user) => {
            res.json({ message: "saved Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      

  })



});

module.exports = router;
