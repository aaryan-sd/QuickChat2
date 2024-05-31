import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
 
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },

    profilePic: {
        type: String,
        default: ""
    }
})

const User = mongoose.model('User',UserSchema);


export default User;