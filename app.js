const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let persona = {
        nombre: 'Joel',
        edad: 17,
        sexo: 'H',
        celular: 996996998
    }

    res.write(JSON.stringify(persona));
    res.end();
}).listen(8000);

console.log('Escuchando en el puerto 8000');