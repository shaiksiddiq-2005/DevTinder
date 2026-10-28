const express = require("express");

const {connectDB } = require("../configure/database.js"); 
const {User} = require("./models/user.js");

const app = express(); 

app.use( express.json() );  


app.post("/signup", async (req,res)=>{
    

    const user = new User(req.body);
    await user.save();
    res.send("Data has been sent successfully!!!!"); 
    
});

app.get("/feed", async (req,res)=>{
    console.log(req.body);

    const users = await User.find({}); 
    if(users){
            res.send(users); 
    }
    else{
        res.send("User data was Not Found!");
    }
    
    
});


app.get("/user", async (req,res)=>{
   console.log(req.body._id)
 
    const userId= req.body.id; // we can pass .id --> ._id
    const user = await User.findById(userId); // Shortcut for Id's 
    // const user = await User.findById({_id: userId});
    
    if(user){
    res.send(user);
    }
    else{
        res.send("User data was Not Found!");
    }

});



// It is used to connect the Database of the MongoDB
connectDB()
    .then(()=>{
        console.log("Connection was Establised");

        // It is used to Start the listening of the server!!!
        app.listen(3000, ()=>{
        console.log("Server is sucessfullt starts listening on the port 3000") 
        });

    })
    .catch((err)=>{
        console.log("Connection was NOT Established!!!");
    });







 