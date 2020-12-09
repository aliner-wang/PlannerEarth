const express = require('express');
const router = express.Router();
const todoTemplateCopy = require('../models/todoModels')
var text = "";
const dotenv = require('dotenv');

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

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
    text = req.body.content;
    client.messages.create({
      body: text,
      from: '+12486005215',
      to: '+18582006636'
    })
    .then(message => console.log(message))
    .catch(e => console.log(e))
  })

module.exports = router



