var http = require('http');
var url = require('url'); // Importando módulo da URL

http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     var queryString = url.parse(req.url, true).query; // Retorna uma urlString como um urlObject
     var textQuery = queryString.year + " " + queryString.month; // Variáveis passadas pela URL
     res.end(textQuery); // Escrevendo para o cliente
}).listen(8080);

// http://localhost:8080/?year=2020&month=Maio