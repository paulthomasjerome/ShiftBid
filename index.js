//importing express
const express = require('express');
//calling express
const app = express();
//store port
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/bundle.js', (req, res) => res.sendFile(__dirname + '/dist/bundle.js'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));