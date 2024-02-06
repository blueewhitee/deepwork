const mongoose = require("mongoose");
const todoSchema =  new mongoose.Schema({
    title : {
        type :String,
        requied:true,
        unique:true
    },
    tasktodo:{
        type:String,
        required : true
    },
    aprxTime : Number
});
module.exports =  new mongoose.model("todo",todoSchema);