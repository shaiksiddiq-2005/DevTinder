const express = require("express");
const {connectDB } = require("../configure/database.js");
const app = express();

app.get("/data", (req,res)=>{
    res.send("Data..................");
})

connectDB()
    .then(()=>{
        console.log("Connection was Establised");

        app.listen(3000, ()=>{
        console.log("Server is sucessfullt starts listening on the port 3000")
        });

    })
    .catch((err)=>{
        console.log("Connection was NOT Established!!!");
    });







 