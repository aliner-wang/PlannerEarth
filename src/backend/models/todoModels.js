const mongoose = require('mongoose');

const todoTemplate = new mongoose.Schema({
    content: {
        type: String
    }
});

module.exports = mongoose.model('mytable', todoTemplate)