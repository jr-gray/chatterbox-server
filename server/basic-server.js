let urlParser = require('url');
let http = require('http');
let utils = require('./utils');
let port = 3000;
let ip = '127.0.0.1';

let handleRequest = require('./request-handler');

let routes = {
  '/classes/messages/': handleRequest
};

let server = http.createServer( function(request, response) {
  let parts = urlParser.parse(request.url);
  
  let route = routes[parts.pathname];
  route ? route(request, response) : utils.sendResponse(response, 'Not found', 404);
});

console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
