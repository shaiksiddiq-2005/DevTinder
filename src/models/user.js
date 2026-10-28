const mongoose = require("mongoose");

// Creating Schema...
// Schema defines how the user data should be structed in the database.
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },

});

// Creating a Model...
// Model is create for the Schema, Which provides methods to create, read, delete and update the documents in the MongoDB.
const User = mongoose.model("User", userSchema);

module.exports = {User}