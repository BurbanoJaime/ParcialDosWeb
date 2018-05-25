const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars'),
    fb = require('fs');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(5000);

app.get('/',(req,res) =>{
    res.render('index');
});

app.get('/paginaUno',(req,res) =>{
    res.render('pagUno');
});

app.get('/paginaDos',(req,res) =>{
    res.render('pagDos');
});