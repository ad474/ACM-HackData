//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");

const app= express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "js")));

app.get("/", function(req,res){
  res.sendFile('views/index.html' , { root : __dirname});
  //res.render("index");
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
