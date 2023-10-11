const express=require('express');
const port=8000;
const app= express();
const myRout = require('./routs/empRauter');

const mongoosedb=require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assests/css/'));

app.use(express.urlencoded());
app.use('/',myRout);
app.listen(port,function(err){
    if(err){
        console.log(`ERROR in server CONNECTION : ${err}`);
    }
    console.log(`SERVER is LISTENNING SUCCESFULLY ON PORT :${port}`);
})