const express = require("express");

const {connectDB } = require("../configure/database.js"); 
const {User} = require("./models/user.js");

const app = express(); 



//Middleware to convert JSON --> JavaScript Object
app.use( express.json() );  



// Adding Data
app.post("/signup", async (req,res)=>{
    
    const data = req.body
    const user = new User(data);
    await user.save();
    res.send("Data has been sent successfully!!!!"); 
    
});

// Getting user by using model.find();
app.get("/user", async(req,res)=>{

    const userEmail = req.body.email;
    const user = await User.find({email : userEmail});

    res.send(user);
})

// Getting All users data by using model.find({ });
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

// getting user data bu using model.findById();
app.get("/userById", async (req,res)=>{
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

// Deleting a user doc, by using model.findByIdAndDelete()
app.delete("/user", async (req, res)=>{

    const userId = req.body.id;
    const user = await User.findByIdAndDelete(userId);

    if(user){
        res.send("User deleted Successfully!!!");
    }

    else{
        res.status(404).send("Something went wronge!!")
    }


});

//Updating the user data by using model.findByIdAndUpdate();
app.patch("/user", async (req, res)=>{
    const userId = req.body.id;
    const data = req.body;

    //const user = await User.findByIdAndUpdate({_id: userId}, data); 
    const user = await User.findByIdAndUpdate(userId, data); // Shortcut
    
    res.send("Data updated Successfully!!!!!!");
})



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







 