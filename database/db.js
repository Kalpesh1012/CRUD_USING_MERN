const mongoose=require("mongoose");

const connection=()=>{
    const URL="";
    try{
         mongoose.connect(URL,{useUnifiedTopology:true})
    }
    catch(error){
        console.log(error+"IS")
    }
}