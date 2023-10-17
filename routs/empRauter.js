const express=require('express');
const router=express.Router();



const empController=require('../controllers/employee_controller');


router.get('/employee',empController.empData);
router.post('/employee/create',empController.create); 
//we will fetch data from db and will append that data
router.get('/all-employee',empController.allEmpData);
router.get('/download-employees',empController.download );



module.exports=router;