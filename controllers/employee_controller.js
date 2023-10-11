const empModel = require('../models/employeemodl');

module.exports.empData=function(req,res){
    return res.render('empData',{
        title:"Employee"
    });
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