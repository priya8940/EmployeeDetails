const express=require('express');
const router=express.Router();
const empController=require('../controllers/employee_controller');


router.post('/employee/create',empController.create);


router.get('/employee',empController.empData);
router.get('/employees',empController.allEmployees);
router.get('/emptocsv',empController.empToCSV);

module.exports=router;