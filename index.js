/* initializes express app => this is equivalent to getting the backend up and running */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// assign port for express to listen to 
app.listen(3001, function() {
    console.log("Server Up and running")
});

const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/api', (req, res) => {
    console.log("YEET");
})

// creates mongo db connection
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/database-tutorial'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)

})

// if connection errors return error report. 
db.on('error', err => {
    console.error('connection error:', err)
})


const Schema = mongoose.Schema

const todoSchema = new Schema({
    content: String,
})

const TODO = mongoose.model("TODO", todoSchema)

// to recieve inputs
app.get('/', (req, res) => {
    res.send('Hello World');
})


// get returns all the todos
// post creates a new todo. 
router.route('/todos')
    .get((req, res) => {
        // in charge of returning all todos
        TODO.find().then((todos) => {
            res.json({ message: "Return all todos.", todos: todos });
        })
    })


.post((req, res) => {
    const todo = new TODO({
        content: req.body.content

    })
    todo.save((error, document) => {
        res.json({
            message: ("Create a new todo: " + "1" + "-" + req.body.contect),
            todo_id: "1",
            content: req.body.content,
        });
    })
})



//todo gets a particular todo task given a todo_id
router.route('/todos/:todo_id')

.get((req, res) => {
    TODO.findById(req.params.todo_id, (err, todo) => {
        if (err) {
            res.json({ message: 'Error when getting the content of the todo' });
        }
        res.json({ message: 'Get the content from a todo.'.todo });
    })

})

.put((req, res) => {
    TODO.findByIdAndUpdate(req.params.todo_id, { content: req.body.content }, (err, todo) => {
        if (err) {
            res.json({ message: "Error when updating todo." });
        }
        res.json({ message: 'Update the todo: ' + req.params.todo_id, old: todo, new: { _id: req.params.todo_id, content: req.body, content } });

    });
})



router.route('/todos/:todo_id')

.delete((req, res) => {
    TODO.findByIdAndDelete(req.params.todo_id, (err, todo) => {
        if (err) {
            res.json({ message: "Failed to delete todo." });
        }

        res.json({ message: "Delete the todo: " + todo._id, todo: { _id: todo._id, cotent: todo.content } });

    });
})



//updates a task */