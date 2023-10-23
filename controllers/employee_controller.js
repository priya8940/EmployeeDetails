const { request } = require("express");
const empModel=require('../models/employeemodl');
const jsontocsv=require('json2csv');
const fs=require('fs');

module.exports.empData=function(req,res){
    return res.render('empData',{
        title:"Employee"
    });
}
module.exports.allEmpData= async function(req,res){
    //fetch all employees from DATABASe

    var allEmp= await empModel.find({});
    //console.log(allEmp);
   const fields=['name','email','salary','dept','role'];
    var csv=jsontocsv.parse(allEmp, {fields});
    fs.writeFile('./empData.csv',csv,function(error){
         if(error){
             console.log('error accure while converting to csv');
         }
        });
    //console.log(csv);
    return res.render('allEmployees',{
        title:"Employee",
        allEmpArr:allEmp
    });
}
module.exports.download=async function(req,res){
    res.download('./empData.csv');
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
    res.render('savedData',empData )
    return;
    
}
