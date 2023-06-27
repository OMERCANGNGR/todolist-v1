const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let ejs = require('ejs');
var name=  2+5;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {name: name});
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});