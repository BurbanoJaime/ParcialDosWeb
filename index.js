const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars'),
    fs = require('fs');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(5000);

var inicio = 0;
var proyectos = 0;
var contacto = 0;

app.get('/',(req,res) =>{

    var inicio =+ 1;
    var proyectos = proyectos;
    var contacto = contacto;

    fs.writeFile('./visitas.txt', '{\n"Inicio": ' + inicio + ';\n"Proyectos": ' + proyectos + ';\n"Contacto": ' + contacto + ';\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
        console.log(inicio);
    });

    res.render('index');
});

app.get('/proyectos',(req,res) =>{

    var inicio = inicio;
    var proyectos =+1;
    var contacto = contacto;

    fs.writeFile('./visitas.txt', '{\n"Inicio": ' + inicio + ';\n"Proyectos": ' + proyectos + ';\n"Contacto": ' + contacto + ';\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
        console.log(inicio);
    });

    res.render('proyectos');
});

app.get('/contacto',(req,res) =>{

    var inicio = inicio;
    var proyectos = proyectos;
    var contacto =+1;

    fs.writeFile('./visitas.txt', '{\n"Inicio": ' + inicio + ';\n"Proyectos": ' + proyectos + ';\n"Contacto": ' + contacto + ';\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
        console.log(inicio);
    });

    res.render('contacto');
});