var http = require('http');
http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write(req.url); // Escrevendo a url
     res.end();
}).listen(8080);

// Execute e vá para "http//localhost:8080/(digite qualquer coisa aqui)"