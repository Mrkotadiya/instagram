// const { ObjectId } = mongoose.Schema.Types;
const { ObjectId } = require('mongodb');
const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

// module.exports


const postSchema = new mongoose.Schema({
    tittle:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"No Photo",
    },
    postedBy:{
        type:ObjectId,
        ref:'USER'
    }
})


mongoose.model("POST",postSchema)