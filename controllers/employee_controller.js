const { request } = require("express");
const empModel=require('../models/employeemodl');

module.exports.empData=function(req,res){
    return res.render('empData',{
        title:"Employee"
    });
}
module.exports.create= async function(req,res){
    //console.log(req.body);
    const {name,email,password,salary,dob,dept,role,doj}=req.body;
    const empExists= await empModel.findOne({
        email
    })
    if(empExists){
        res.json({
            massage:"Emp Already Exists"
        })
        return;

    }
    const empData= await empModel.create({
        name,
        email,
        password,
        salary,
        dob,
        dept,
        role,
        doj
    })
    //res.json({
       // massage:"Emp Saved Succesfully",
     //   empData
   // })
    res.render('data',empData )
    return;
    
}
