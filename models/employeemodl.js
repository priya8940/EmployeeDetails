//creating schema 
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
         type:String,
         required:true,

    },
    name:{
        type:String,
        required:true
    },

    salary:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    
});
const user=mongoose.model('user',userSchema);
module.exports=user;