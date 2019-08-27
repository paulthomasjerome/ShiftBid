//importing express
const express = require('express');
//calling express
const app = express();
//store port
const port = 3000;

app.use(express.static('public'));
app.use(express.static('dist'));

//Listin on stored port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));