const hbs = require('hbs')

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (txt) => {
    let palabras = txt.split(' ');

    palabras.forEach((palabra, i) => {
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');
})

// No es necesario exportar nada, puesto que solo se va a usar
// todo este fragmento de código