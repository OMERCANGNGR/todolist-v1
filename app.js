const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let ejs = require('ejs');

app.set('view engine', 'ejs');

var date = new Date();
var day= date.getDay();
var dayName="";
switch (day) {
    case 0:
        dayName="Sunday";
        break;
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="Saturday";
        break;

    default:
         console.log("Something went wrong");
        break;
}

app.get('/', (req, res) => {
    res.render('index', {kindOfDay: dayName});
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});