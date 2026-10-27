const mongoose = require("mongoose");

console.log("Hello from DB")

const connectDB = async () => {

   await mongoose.connect(
        "mongodb+srv://ShaikSiddiq:siddiqshaik@shaiksiddiq.poghlgv.mongodb.net/"
    );
}

module.exports ={connectDB}

