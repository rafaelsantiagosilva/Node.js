// Não funcionou (censurei os emails e a senha)
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
          user: '------------',
          pass: '------------'
     }
});

var mailOptions = {
     from: '-------------------------',
     to: '---------------------------',
     subject: 'Enviando e -mail usando o Node.js',
     text: 'Enviando email com JavaScript (ou tentando D:)'
};

transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
          console.log(error);
     } else {
          console.log('Email sent: ' + info.response);
     }
});