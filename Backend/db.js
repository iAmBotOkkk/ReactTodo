const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://barmanbishal1234:TritigdoOKNhR3GQ@cluster0.rp54j.mongodb.net/ReactTodo?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("MongoDb Connected");
});

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}