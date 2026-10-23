const express = require("express");

const app = express();



app.get("/user", (req, res)=>{
    res.send( { name: "siddiq", age: 22, college: "raghu" });  // it was giving the data to clients.
});

app.post("/user", (req,res)=>{
    res.send("The data is saved inside the database!");  // it was receiving the data and saved at Databases.
})

app.delete("/user", (req, res)=>{
    res.send("The data has been deleted!"); // it was used to delete the data from the database.
});

app.patch("/user", (req, res)=>{
    res.send("The data has been updated!")  // it is used to update the data ibn database.
})


app.listen(3000);

