const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3033;
const server = http.createServer(app);

server.listen(port);

console.log("Servidor Escutando na porta "+port);