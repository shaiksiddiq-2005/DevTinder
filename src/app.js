// Route Handlers 
 
const express = require("express");

const app = express();


app.get("/user", (req, res)=>{
    res.send("Hello from the server");
})




app.listen(3000);


