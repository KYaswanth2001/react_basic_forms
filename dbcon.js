const mysqldb = require("mysql2");
const con = mysqldb.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin$123",
    database:"website"
})
function startConnection(){
    con.connect((err)=>{
        if(err) throw err;
        console.log("Connected");
    });
}
//get studentform from db.
async function getStudentform(){
    startConnection();
    const query="SELECT * FROM website.studentform";
    const data=await con.promise().query(query);
    return data[0];
}
//post api for studentform
async function addTeacherform(firstname,lastname,email,phonenumber,gender,adderss){
    startConnection();
    const query=`INSERT INTO website.teacherform(firstname,lastname,email,phonenumber,gender,adderss)
    VALUES('${firstname}','${lastname}','${email}','${phonenumber}','${gender}','${adderss}')`
   const data= await con.promise().query(query);
    return data[0];
}
//get teacherform from db.
async function getTeacherform(){
    startConnection();
    const query="SELECT * FROM website.teacherform";
    const data=await con.promise().query(query);
    return data[0];
}
//post api for teacherform
async function addTeacherform(firstname,lastname,email,phonenumber,gender,adderss,subject,experience){
    startConnection();
    const query=`INSERT INTO website.teacherform(firstname,lastname,email,phonenumber,gender,adderss,subject,experience)
    VALUES('${firstname}','${lastname}','${email}','${phonenumber}','${gender}','${adderss}','${subject}','${experience}')`
   const data= await con.promise().query(query);
    return data[0];
}
//exports module
module.exports={
    getStu:async()=>getStudentform(),
    addStudentform:async(firstname,lastname,email,phonenumber,gender,adderss)=>addStudentform(firstname,lastname,email,phonenumber,gender,adderss),
}
module.exports={
    getTea:async()=>getTeacherform(),
    addTeacherform:async(firstname,lastname,email,phonenumber,gender,adderss,subject,experience)=>addTeacherform(firstname,lastname,email,phonenumber,gender,adderss,subject,experience),
}