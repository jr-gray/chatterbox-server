let headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

exports.sendResponse = (response, data, statusCode=200) => {
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.collectData = (request, callback) => {
  let data = '';
  request.on('data', (chunk) => { data += chunk });
  request.on('end', () => { callback( JSON.parse(data) )} );
};