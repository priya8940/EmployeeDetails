const express=require('express');
const router=express.Router();


const empController=require('../controllers/employee_controller');
console.log('WOW! Router is loaded');
router.get('/employee',empController.empData);


module.exports=router;