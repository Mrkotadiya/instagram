const express = require('express');
const  app= express();
const mongoose = require('mongoose');
const {mongoUrl} = require("./keys");
require("./models/model");  //USer Model
require("./models/post")   // createpost model 
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use(require("./Routes/Auth"))
app.use(require("./Routes/CreatePost"))


mongoose.connect(mongoUrl)

mongoose.connection.on("connected" , ()=>{
    console.log("connect successfully");
})

mongoose.connection.on("error " , ()=>{
    console.log("not connect");
})




const PORT = 6969;
app.listen(PORT,()=>{
    console.log(`Server Running in ${PORT}`);
})