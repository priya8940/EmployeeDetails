const express=require('express');
const router=express.Router();



const empController=require('../controllers/employee_controller');
router.get('/employee',empController.empData);
router.post('/employee/create',empController.create);




module.exports=router;