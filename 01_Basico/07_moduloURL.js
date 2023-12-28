const url = require('url');
var adress = 'http://localhost:8080/default.htm?year=2017&month=february';
var queryString = url.parse(adress, true);

console.log(queryString.host); // Retorna 'localhost:8080
console.log(queryString.pathname); // Retorna '/default.htm'
console.log(queryString.search); // Retorna '?year=2017&moth=february'

var queryData = queryString.query; // Retorna um objeto -> {year: 2017, month: 'february'}
console.log(queryData.month); // Retorna 'february'