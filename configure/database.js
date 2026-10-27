const mongoose = require("mongoose");

console.log("Hello from DB")

const connectDB = async () => {

   await mongoose.connect(
        "mongodb+srv://ShaikSiddiq:siddiqshaik@shaiksiddiq.poghlgv.mongodb.net/devTinder"
    );
}

module.exports ={connectDB}

