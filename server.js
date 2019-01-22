const express = require('express');
const hbs = require('hbs')
const app = express()


//Definiendo el middleware y la carpeta que será pública para los usuarios
app.use(express.static(__dirname + '/public'))

// Express HBS engine
// Librería que se encarga de renderizar las páginas
// en las que usamos los handleBars
app.set('view engine', 'hbs')

// Declaración del directorio de las vistas parciales
hbs.registerPartials(__dirname + '/views/partials')

// Obtenemos los helpers
require('./hbs/helpers.js')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Pagina Home',
        titulo: 'jOEl verASTegui'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Pagina About'
    })
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
});