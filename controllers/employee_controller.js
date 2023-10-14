const empModel = require('../models/employeemodl');
const json2csvParser = require('json2csv').parse;
const fs = require('fs');

module.exports.empData=function(req,res){
    return res.render('empData',{
        title:"Employee"
    });
}

module.exports.allEmployees=async function(req,res){
    const allEmployees = await empModel.find({});
    const fields = ['name', 'email', 'password', 'salary'];
    const csv = json2csvParser(allEmployees, {fields});
    fs.writeFile('./data.csv', csv, (error)=>{
        if(error){
            console.log(`Error Occurred ${error}`);
        }
    });
    return res.render('allEmp',{employees: allEmployees});
}

module.exports.empToCSV=async function(req,res){
    return res.download('./data.csv');
}

module.exports.create= async function(req,res){
    const {name, email, password, salary, dob, dept, role, doj} = req.body;

    const empExists = await empModel.findOne({
        email
    })
    if(empExists){
        res.json({
            message: 'Employee Already Exists'
        })
        return;
    }

    const empData = await empModel.create({
        name,
        email,
        password,
        salary,
        dob,
        department: dept,
        role,
        doj
    })
    res.render('successFile',empData);
    return;
}