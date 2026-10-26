//Middleware, using Middleware for the Authentication process...

const {userAuth} = require("../middleware/auth");
const express = require("express");
const app = express();


// Route Handler........
app.get("/userData", (req, res)=>{

        throw new Error ("vudciianvifagoqf");
        res.send ("user Logged in Successfully!");
});

app.get("/use", (err, req, res, next) =>{
    if (err){
        res.status(104).send("Error Occured!");
    }
});


app.listen(3000);


