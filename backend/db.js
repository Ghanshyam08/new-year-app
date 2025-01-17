const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:<admin>@cluster0.iemwhf2.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}