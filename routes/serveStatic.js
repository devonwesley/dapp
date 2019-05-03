const fs = require('fs');  
const path = require('path');  

const staticBasePath = './dist';

const serveStatic = function(request, response) {  
  const resolvedBase = path.resolve(staticBasePath);
  const safeSuffix = path.normalize(request.url).replace(/^(\.\.[\/\\])+/, '');
  const fileLoc = path.join(resolvedBase, safeSuffix);
  let stream = fs.createReadStream(fileLoc);
  
  stream.on('error', function(error) {
    console.log('ERROR :: ==>', error);
    response.writeHead(404, 'Not Found');
    response.write('404: File Not Found!');
    response.end();
  });

  response.statusCode = 200;
  return stream.pipe(response);
};

module.exports = serveStatic;