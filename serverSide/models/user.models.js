const mongoose = require('moogoose');
const userSchema  = new mongoose.Schema({
    Username: String,
    
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase : true
    },
    password : String||Number

},{timestamps})