// Route Handlers 
 
const express = require("express");

const app = express();


app.get("/user", (req, res, next) =>{
    console.log("Handling the route user-1 ")
    // res.send("Router 1")  //If response was available. then the response would be displad and raised an erroe because we have called next();
    next();
}, 
(req, res, next) =>{
    console.log("Handling the route user-2 ")
    // res.send("Router 2")
    next();
},
(req, res, next) =>{
    console.log("Handling the route user-3 ")
    res.send("Router 3")   // if there is no repone in this handler, then it goes inside a infinite loop!
   //next();   It will throws an error, because the is no next handler, so that next() not be used.
})




app.listen(3000);


