const express = require('express');
const app = express();

app.use(express.static(__dirname + '/creativesite'));

app.listen(1337, () => {
    console.log('Server started on http://localhost:1337');
    });