// Basic express app
const express = require('express');
const { stat } = require('fs');
const app = express();

const path = require('path')

const port = 3000

const static_dir = path.join(__dirname + '/public')
app.use(express.static(static_dir))

app.get('/', (req, res) => {
    res.sendFile(static_dir);
});

app.get('/status', (req, res) => {
    res.send(res.statusCode);
});

app.listen(port, () => {
    console.log(`Server is ready~~ http://localhost:${port}`);
});