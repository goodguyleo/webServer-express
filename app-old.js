const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'leo',
        edad: 24,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('hola mundo equis de');
    res.end();
})

.listen(8080);
console.log("Escuchando puerto 8080");