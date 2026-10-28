const express = require("express");

const {connectDB } = require("../configure/database.js"); // It is used for the +Connecetion Establishment between the Application and Database 

const {User} = require("./models/user.js"); // It is used to follow the structure of the data arrangement!

const app = express(); // It is used to Start the Server!

// It is a middleware which checks every routing because we have't mentioned sepicify route to check.
app.use( express.json() );  // It is middleware given by the Express, which helps us to convert the JSON data ----> JS object so that we can access the JS object data.);

app.post("/signup", async (req,res)=>{
    console.log(req.body);   // It returns a Javascript object, the data which is recieves from the API/Postman..

    const user = new User(req.body);
    await user.save();
    res.send("Data has been sent successfully!!!!"); 
    
});


app.get("/user", async (req,res)=>{
    console.log(req.body.email)

    const userEmail = req.body.email;
    const user = await User.find({email: userEmail});

    res.send(user); 

});


app.get("/feed", async (req,res)=>{
    console.log(req.body);

    const users = await User.find({}); // Filter --> process begins at User which is model for the userSchema.
    res.send(users);
    
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







 