var http = require('http');
var fileSystem = require('fs'); // Usado para a manipulação de arquivos

http.createServer((req, res) => {
     fileSystem.readFile('06_fileSystem.html', (err, data) => { // Pegando o arquivo
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data); // Vai escrever o conteúdo do arquivo
          return res.end(); // Vai terminar o processo do servidor
     });
}).listen(8080);

// http://localhost:8080/