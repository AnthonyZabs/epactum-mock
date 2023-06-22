const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<iframe allow="camera; microphone; fullscreen" width="100%" height="1000px" src = "https://52.45.67.50:5555/sample-apps/sample-app-ts/index.html"></iframe >');
    res.end();
});

const options = {
    key: fs.readFileSync('clave_privada.pem'), // Ruta a tu clave privada
    cert: fs.readFileSync('certificado.pem') // Ruta a tu certificado
};

const server = https.createServer(options, app);

server.listen(3000, () => {
    console.log('Servidor HTTPS escuchando en el puerto 3000');
});
