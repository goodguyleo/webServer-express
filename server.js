const express = require('express')
const app = express()
const hbs = require('hbs')
    // require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));




// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');


//helpers


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');

});

app.set('view engine', 'hbs');







app.get('/', (req, res) => {
    // res.send('Hello World equis de')

    res.render('home', {
        nombre: 'leoWo'

    });

});

app.get('/about', (req, res) => {
    // res.send('Hello World equis de')

    res.render('about')

});
app.get('/data', (req, res) => {
    res.send('Hello Data')



});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});