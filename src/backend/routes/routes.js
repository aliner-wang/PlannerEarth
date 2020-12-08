const express = require('express');
const router = express.Router();
const todoTemplateCopy = require('../models/todoModels')

router.route('/todos')
  // ...
  // This POST methods is used to create a new todo. 
  // Its request will have a body, containing the content of the new todo.
	.post((req, res) => {
    const todo = new todoTemplateCopy({
      content: req.body.content
    })
    todo.save((error, document) => {
      res.json({ 
        message: ('Create a new todo: ' + todo._id + " - " + req.body.content),
        todo_id:  todo._id,
        content: req.body.content,
      }); 
    })
  })

module.exports = router