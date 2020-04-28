const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SqlS = require("sqlstring");

const saltRounds = 10;

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Roflpwn123",
    database:"shop"
})


login = async(req,res) =>{
    
    let hashPass;
    const body = req.body;
    const user = body.email;
    const password = body.password;


    

}


module.exports = {
    login,
    connection
}