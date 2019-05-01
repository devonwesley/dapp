const http = require('http');
const { serveStatic } = require('./routes');

console.log('Inside of /server.js');

const server = http.createServer((request, response) => {
  console.log('URL ==::>', request.url);
  switch (request.url) {
    case 'value':
      break;
    default:
      return serveStatic(request, response);
  }
})

server.listen(8080);

