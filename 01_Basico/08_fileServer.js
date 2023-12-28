// Importando os módulos
const http = require('http');
const url = require('url');
const fs = require('fs');

// Criando o servidor
http.createServer((req, res) => {

     // Pegando a url
     var queryString = url.parse(req.url, true);

     // Pegando o nome do arquivo desejado
     var fileName = "." + queryString.pathname;

     // Lendo o arquivo
     fs.readFile(fileName, (err, data) => {
          
          // Se der erro
          if (err) {
               res.writeHead(404, { 'Content-Type': 'text/html' })
               return res.end("<h1>404</h1> <p>Not Found</p>");
          
          // Senão
          } else {
               res.writeHead(200, { 'Content-Type': 'text/html' });
               res.write(data);
               return res.end();
          }
     });
}).listen(8080);

// http://localhost:8080/08_fileServerSummer.html
// http://localhost:8080/08_fileServerWinter.html
// http://localhost:8080/qualquerCoisa.html