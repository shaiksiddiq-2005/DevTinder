//Middleware, using Middleware for the Authentication process...

const express = require("express");
const app = express();

// Middleware...
app.use("/user", (req, res, next)=>{

    const tokens = "xyz";
    const userAuth= tokens === "xyzss"; // true


        // True
        if (userAuth){
           next();    
        }

        // False
        else {
            res.status(401).send("unauthorized Request!");
        }
});


// Route Handler..
app.get ("/user/data", (req, res, next) => {

    res.send("The user data is sent!"); 
});

app.listen(3000);


