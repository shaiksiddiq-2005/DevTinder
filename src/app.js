const express = require("express");

const app = express();


app.use("/hello", (req, res) => {
    res.send("Hello from the server!");
});

// This won't work --> because there was a problem with routhing.. 
app.use("/hello/2", (req, res) => {
    res.send("222222222222222");
});




app.use("/test", (req, res)=>{
    res.send("Hello from testing....");
});

app.use("/Hey", (req, res)=>{
    res.send("Hey from server....");
});


// The order of Routing is very important!
app.use("/", (req, res)=>{
    res.send("Welcome....");  
})


app.listen(3000);

