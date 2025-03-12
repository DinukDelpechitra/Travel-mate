const express = require("express");
const dbconnection = require("./config/db");

const app = express();

//DB connection
dbconnection();

app.get("/",(req,res)=> res.send("Hello World"));

const PORT = 5000;

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`)); 
