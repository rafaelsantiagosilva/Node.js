var http = require("http");
var date = require("./01_criandoModulos"); // Importando meu modulo

http.createServer(function (req, res) {
	res.writeHead(200, { "Content-type": "text/html" });
	res.write("The date and time are currently: " + date.myDateTime()); // Usando a função do meu módulo
	res.end();
}).listen(8080);
