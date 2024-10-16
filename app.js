const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});
app

app.get('/deshboard', function (req, res) {
    res.render('deshboard');
});

app.get('/routes',function (req,res) {
    res.render('routes')
})

app.get('/attendence',function (req,res) {
    res.render('attendence')
})

app.get('/students',function(req,res) {
    res.render('students')
})

app.get('/livemap',function(req,res) {
    res.render('livemap')
})

app.listen(3000);
   



