//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");

const app= express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//mongoose.connect("mongodb://localhost:27017/hackdataDB", { useUnifiedTopology: true, useNewUrlParser: true });

const teamSchema=new mongoose.Schema({
  teamname:String,
  track: String,
  name1: String,
  college1: String,
  number1: String,
  email1: String,
  name2: String,
  college2: String,
  number2: String,
  email2: String,
  name3: String,
  college3: String,
  number3: String,
  email3: String
});

app.get("/", function(req,res){
  res.sendFile('views/index.html' , { root : __dirname});
  //res.render("index");
});

app.post("/register", function(req,res){
  console.log(req.body);
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
