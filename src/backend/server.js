const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3001, function () {
    console.log("working")
});
app.use(express.json());
app.use(cors());
app.post('/api', (req, res) => {
    console.log("YEET");
} )