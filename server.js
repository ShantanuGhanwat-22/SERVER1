const express = require('express');
const app=express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.send("welcome");});
app.get("/product",(req,res)=>{
    var p = {
        "id":"45","title":"Anime","Description":"Naruto","Seasons":"3","Episodes":"1000"
    };res.send(p);});
app.listen(8000);
console.log("App is listening on port 8000");