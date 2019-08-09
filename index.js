//importing express
const express = require('express');
//calling express
const app = express();
//store port
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));