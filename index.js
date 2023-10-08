//my file
const express=require('express');
const port=8000;
const app= express();

const mongoosedb=require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('.assests'));


app.get('/employee/create', function(req,res){
    res.render('empData');
})
app.listen(port,function(err){
    if(err){
        console.log(`ERROR in server CONNECTION : ${err}`);
    }
    console.log(`SERVER is LISTENNING SUCCESFULLY ON PORT :${port}`);
})