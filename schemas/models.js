const mongoose = require('mongoose');



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    LastName:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    }
})
const User=mongoose.model("User",userSchema);
module.exports=User;