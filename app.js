const express=require("express");
const bodyParser=require("body-parser");
const ejs=require('ejs');
const app=express();
var items=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var options ={
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    var today=new Date();
    // var curday=today.getDay();
    var day=today.toLocaleDateString("en-US",options);
    // switch(curday){
    //     case 0:
    //     day="Sunday";
    //     break;
    //     case 1:
    //     day="Monday";
    //     break;
    //     case 2:
    //     day="Tueday";
    //     break;
    //     case 3:
    //     day="Wednesday";
    //     break;
    //     case 4:
    //     day="Thursday";
    //     break;
    //     case 5:
    //     day="Friday";
    //     break;
    //     case 6:
    //     day="Saturday";
    //     break;    
    //     default:
    //     console.log("Error!! value of curday is :"+curday);
    // }
    res.render("list", {dayval: day,newit: items});
});


app.get("/about",function(req,res){
    res.render("about");
});


app.post("/",function(req,res){
    task=req.body.item;
    items.push(task);
    console.log(task);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
