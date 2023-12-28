var http = require('http'); // Transferir dados com o protocolo http

// Criando um objeto do servidor
http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/html" }); // Escrevendo um cabeçalho para o cliente
     // 200 significa que tá tudo Ok, o outro argumento são os cabeçalhos de resposta

     res.write('Hello World <br />'); // Escreve uma resposta para o cliente
     res.end(); // Fim da resposta
}).listen(8080); // O objeto do servidor vai ouvir a porta 8080