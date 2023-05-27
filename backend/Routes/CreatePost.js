const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const POST = mongoose.model("POST")



router.post('/createpost',requireLogin,(req,res)=>{

    const {tittle,body} = req.body;

    if(!tittle || !body){
       return res.status(422).json({error:"Please enter all the filed "})
    }

    console.log(req.user)
    const post = POST({
        tittle,body,postedBy:req.user
    })

    post.save().then((result)=>{
        return res.json({post:result})
    }).catch(err => {console.log(err);});



})


module.exports = router;