const mongoose = require("mongoose");

// Creating Schema...
// Schema defines how the user data should be structed in the database.
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true,
        minLength:4,
        maxLength:30,
        lowercase: true
    },
    lastName: {
        type: String,
        minLength:4,
        maxLength:30,
        uppercase: true
    },
    age: {
        type: Number,
        required:true,
        min:18,
        max:100,
    },
    gender:{
        type: String,
        required : true,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error(" Gender is not valid...")
            }
        },
    },
    email:{
        type: String,
        required :true,
        unique: true,
        lowercase:true,
        trim: true
    },
    password:{
        type: String,
        required : true,
    },
    about:{
        type: String,
        default: "Heyy Thereeeee"
    },
    skills:{
        type:[String]
    }

},
{
    timestamps: true  // To record the created and updated time of te document.
});

// Creating a Model...
// Model is create for the Schema, Which provides methods to create, read, delete and update the documents in the MongoDB.
const User = mongoose.model("User", userSchema);

module.exports = {User}

