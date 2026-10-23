const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
    res.send("Hello from the server!");
});


app.use("/test", (req, res)=>{
    res.send("Hello from testing....");
});

app.use("/Hey", (req, res)=>{
    res.send("Hey from server....");
});


app.listen(3000);

