const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const SqlS = require("sqlstring");

const saltRounds = 10;

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Roflpwn123",
    database:"shop"
})

const key = fs.readFileSync("./private.key", "utf8");
const pubkey = fs.readFileSync("./public.key", "utf8");

const tokenGen = (userId) =>{
    return jwt.sign({id:userId}, key, {algorithm:"RS256"}, {expiresIn:Date.now()+ 777600000})
}

login = async(req,res) =>{
    
    const email = req.body.email;
    const password = req.body.password;
    
    await new Promise ((resolve, reject)=>connection.query("SELECT id, email, password FROM users WHERE email=("+SqlS.escape(email)+")", (err,response)=>{
        if(response){
            resolve(response);
        }else{
            res.send({error:"Email Address Does Not Match Our Records"})
            reject(new Error("No user"));
        }
    }))
    .catch(err=>console.log("bcrypt error"))
    .then(async (response)=>{
        await new Promise((resolve, reject)=>bcrypt.compare(password, response[0].password).then(result=>{
            if(result){
                let userToken = tokenGen(response[0].id);
                resolve(res.send({token:userToken}));
            }else{
                reject(res.send({error:"Username or Password is Incorrect"}))
            }
        }))
    })
    .catch(err=>console.log("bcrypt error")); 

}

register = async(req,res) =>{

    const email = req.body.email;
    const password = req.body.password;
    
    await new Promise ((resolve, reject)=>{
        bcrypt.genSalt(saltRounds, function(err, salt){
            bcrypt.hash(password, salt, function(err, hash){
            
                if(err) reject(err)
                resolve(hash);
            })
        })
    })
    .catch(err=>console.log("bcrypt error"))
    .then(async (hash) => await new Promise((resolve,reject)=>{
        
        connection.query("INSERT INTO users VALUES (null, "+SqlS.escape(email)+", "+SqlS.escape(hash)+" ,FALSE)", 
        (err,response)=>{
            if(err){
                reject(res.send({error:"Email Already Registered"}))
            }else{
                let userToken = tokenGen(response.insertId);
                resolve(res.send({error:false, token:userToken}))
            }
        })
    }).catch(err=>console.log(err)))
}

getData = async(req,res)=>{

}

getUser = async(req,res)=>{

}

adminLogin = async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    await new Promise ((resolve, reject)=>connection.query("SELECT id, email, password, admin FROM users WHERE email=("+SqlS.escape(email)+")", (err,response)=>{
        
        if(response.length>0 && response[0].admin){
            resolve(response);
        }else if (response.length>0){
            res.send({error:"User Does Not Have Admin Privileges"})
            reject(new Error("User Does Not Have Admin Privileges"));
        }else{
            res.send({error:"Email Address Does Not Match Our Records"})
            reject(new Error("No user"));
        }
    }))
    .catch(err=>console.log("first error"))
    .then(async (response)=>{
        await new Promise((resolve, reject)=>bcrypt.compare(password, response[0].password).then(result=>{
            //nest the new promise possibly
            if(result){
                let userToken = tokenGen(response[0].id);
                resolve(userToken);
            }else{
                reject(res.send({error:"Username or Password is Incorrect"}))
            }
        })).catch(err=>console.log("second error"))
    }).catch(err=>console.log("second error")).then(async (userToken)=>{
        //Does not get the usertoken from the previous async await
        
        await new Promise((resolve, reject)=>connection.query("SELECT * FROM orders ORDER BY date LIMIT 5", (err, response)=>{
            if(userToken){
                res.send({token:userToken, orders:response[0]})
                resolve()
            }else{
                reject(new Error("Server Error"))
            }
        }))
    })
    .catch(err=>console.log(err));

}

search = async(req,res) =>{
    
}



module.exports = {
    login,
    register,
    connection,
    getData,
    getUser,
    adminLogin
}