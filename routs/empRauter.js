const express=require('express');
const router=express.Router();
const empController=require('../controllers/employee_controller');


router.post('/employee/create',empController.create);


router.get('/employee',empController.empData);

module.exports=router;