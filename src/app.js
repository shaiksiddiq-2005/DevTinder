//Middleware, using Middleware for the Authentication process...
 
const express = require("express");

const app = express();

app.get("/user/:id/:userName", (req, res, next)=>{

    const userId = req.params.id;
    const userName = req.params.userName;

    res.send(` The user Name is ${userName} and userId is ${userId} `);

});



app.listen(3000);


