// Executar e acessar "http//localhost:8080"

var http = require("http"); // Importanto http

http.createServer(function (req, res) { // Criando um servidor na porta 8080
	res.writeHead(200, { "Content-Type": "text/html" }); // Escrevendo no head do doc
	res.end("Hello World"); // Escrevendo "Hello World" na tela
}).listen(8080); // Tentar acessar o computador na porta 8080
