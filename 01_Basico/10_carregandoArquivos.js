// Não funciona
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
     if (req.url == '/fileupload') { // Verificando se já foi carregado
          var form = new formidable.IncomingForm();
          form.parse(req, (err, fields, files) => {
               var oldpath = files.filetoupload.filepath;
               var newpath = "C:/Users/rafas/" + files.filetoupload.originalFilename;
               fs.rename(oldpath, newpath, (err) => {
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
               })
          });
     } else { // Criando formulário para o envio do arquivo
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<form action="fileupload" method="get" enctype="multipart/form-data">');
          res.write('<label for="filetoupload"/>Envie um arquivo</label>');
          res.write('<input type="file" id="filetoupload" name="filetoupload"/><br/>');
          res.write('<input type="submit" value"Submit"/>');
          res.write('</form>');
          return res.end();
     }
}).listen(8080);