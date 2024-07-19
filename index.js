//  const http = require("http");
//  http.createServer((req,res)=>createServerCallback(req,res)).listen(4001);
// function createServerCallback(req,res){
//    res.write("welcome to http server api.");
//    res.end();
// }
const express = require("express");
const dbCon = require("./dbcon");
let app = express();
app.listen(4001, ()=>{
    console.log("server running");
});
app.get("/api",(req,res)=>createServerCallback(req,res));
function createServerCallback(req,res){8
    res.write("Welcome to express api.");
    res.end();
}
//get student.
app.get("/studentform",(req,res)=>studentformCallback(req,res));
async function studentformCallback(req,res){
    console.log("student api called");
    let data=await dbCon.getStu();
    res.write(JSON.stringify(data));
    res.end();
}
const formidable = require("express-formidable");
const cors=require("cors");
app.use(cors());
app.use(formidable());
//post student
app.post("/savestudentform", (req, res) => savestudentformCallback(req, res));

async function savestudentformCallback(req, res) {
    console.log("Student save API called");
    let data = await dbCon.addStudentform(req.fields.firstname,req.fields.lastname, req.fields.email,
        req.fields.phonenumber, req.fields.gender,req.fields.adderss);
    // res.redirect("");
    res.end();
}

//get teacher.
app.get("/teacherform",(req,res)=>teacherformCallback(req,res));
async function teacherformCallback(req,res){
    console.log("teacher api called");
    let data=await dbCon.getTea();
    res.write(JSON.stringify(data));
    res.end();
}

//post teacher
app.post("/saveteacherform", (req, res) => saveteacherformCallback(req, res));

async function saveteacherformCallback(req, res) {
    console.log("Teacher save API called");
    let data = await dbCon.addTeacherform(req.fields.firstname,req.fields.lastname, req.fields.email,
        req.fields.phonenumber, req.fields.gender,req.fields.adderss,req.fields.subject,req.fields.experience);
    // res.redirect("");
    res.end();
}