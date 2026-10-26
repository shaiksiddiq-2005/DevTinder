//Middleware, using Middleware for the Authentication process...

const {userAuth} = require("../middleware/auth");
const express = require("express");
const app = express();


// Route Handler........
app.get("/userData", (req, res)=>{
    try{
           // throw new Error ("vudciianvifagoqf");
            res.send ("user Logged in Successfully!");
        }
    catch (err){
        res.status(404).send("An error had occured!");
    }
});








app.listen(3000);


