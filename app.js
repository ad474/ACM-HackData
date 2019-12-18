//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const upload= require("express-fileupload");
const fs= require("fs");
// const admin=require("firebase-admin");
// const serviceAccount=require('./serviceAccountKey.json');
// admin.initializeApp({
//   credential:admin.credential.cert(serviceAccount)
// });
// const db=admin.firestore();
//
// let docRef = db.collection('users').doc('alovelace');
//
// let setAda = docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });

const app= express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(upload());

mongoose.connect("mongodb://localhost:27017/hackdataDB", { useUnifiedTopology: true, useNewUrlParser: true });
var reg;


const teamSchema=new mongoose.Schema({
  uniqueID:Number,
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
  // res.sendFile('views/index.html' , { root : __dirname});
  res.render("index");
});

app.post("/register", function(req,res){
  reg=req.body;
  console.log("coming here");
  //console.log(reg);
  //console.log(reg);
  //res.send("okay");
  //res.sendFile('views/resume.html' , { root : __dirname});
  //res.redirect('/addresume');
});

// app.get('/addresume',function(req,res){
//   console.log("now here");
//   res.render("resume");
//   //res.sendFile('views/resume.html' , { root : __dirname});
// });

app.post("/fileupload",function(req,res){
  console.log(reg);
  console.log(req.files);
  var file=req.files.filename,
    filename=file.name;
  console.log(file);
  // file1.mv("./public"+file1,function(err){
  //   if(err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log("Done!");
  //   }
  // });
  // if(req.files){
  //
  // }x
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
