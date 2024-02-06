const express = require('express');
const app = express;
const goalsrouter = express.Router();
const mongoose = require('mongoose');
const Todo = require("../models/TodoModel");


goalsrouter.get
('/', async (req, res) => {

    let task = new Todo({
        title:req.body,
        
    })



    /*let task = new Todo({
        title: 'first entry',
        tasktodo:'adding data to db',
        aprxTime:123
    })
    await task.save();*/
    
});







module.exports = goalsrouter;