const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes')

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true})
app.use(express.json());
app.use(cors());
app.use('/app', routesUrls)
app.listen(4000, function () {
    console.log("working server")
})