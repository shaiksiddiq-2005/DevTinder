const express = require("express");

const {connectDB } = require("../configure/database.js"); // It is used for the +Connecetion Establishment between the Application and Database 

const {User} = require("./models/user.js"); // It is used to follow the structure of the data arrangement!

const app = express(); // It is used to Start the Server!

app.get("/data", (req,res)=>{
    res.send("Data..................");
});

// Sending the Data...
app.post("/signup", async (req,res)=>{

    const userData = {
        firstName : "Mouli",
        lastName : "Mathireddy",
        age : 21,
        gender : "Male",
    }

    const user = new User(userData);

    await user.save();
    res.send("Data has been sent successfully!!!!");
    
});

// It is used to connect the Database of the MongoDB
connectDB()
    .then(()=>{
        console.log("Connection was Establised");


        // It is used to Start the listening of the server!!!
        app.listen(3000, ()=>{
        console.log("Server is sucessfullt starts listening on the port 3000") 
        });

    })
    .catch((err)=>{
        console.log("Connection was NOT Established!!!");
    });







 