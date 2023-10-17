//my file
const express=require('express');
const port=8000;
const app= express();
app.use(express.urlencoded());
const myRout=require('./routs/empRauter');

const mongoosedb=require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assests'));

app.use('/', myRout);
//BROWSER SENDS REQ ONLY SERVER SO WE HAVE TO TELL THAT YOU HV TO SEE THIS URL IN ROUTES FOR THIS YOU HAVE TO USE MIDDLEWARE
//app.get('/employee/create', function(req,res){
    //console.log('HAHAH');
   /// res.render('empData');
//})


app.listen(port,function(err){
    if(err){
        console.log(`ERROR in server CONNECTION : ${err}`);
    }
    console.log(`SERVER is LISTENNING SUCCESFULLY ON PORT :${port}`);
})