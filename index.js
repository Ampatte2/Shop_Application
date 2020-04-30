const express = require("express")
const app = express();
const PORT = process.env.PORT || 4000;
const https = require("https");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./controller");
const router = require("./routes");


if (process.env.NODE_ENV==="production"){

}

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router)
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
})

db.connection.connect(function(err){
    if(err)console.log(err);
    console.log("connection");
})


