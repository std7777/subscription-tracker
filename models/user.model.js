import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required:[true, "User name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email:{
        type: String,
        required:[true,"User email is required"],
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S/, 'PLease enter a valid user email'],

    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:6,
    }

},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;

//{name:'john doe', email:'jd@school.org', password:'pwd123'}