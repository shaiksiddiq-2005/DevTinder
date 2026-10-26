// Route Handlers 
 
const express = require("express");

const app = express();


app.get("/user", (req, res)=>{
    // If we didn't send any respones, for the request then it goes inside the infinite loop (Sending request.........)
     res.send("Hello from the server");
})




app.listen(3000);


