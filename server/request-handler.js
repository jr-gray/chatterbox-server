let utils = require('./utils');

let objectId = 1;
let messages = [
  {
    text: 'Hello',
    username: 'JR',
    objectId: objectId
  }
];

const actions = {
  'GET': (request, response) => { utils.sendResponse( response, { results: messages } ) },
  'POST': (request, response) => { 
    utils.collectData(request, function(message) { 
      messages.push(message);
      message.username = 'JR'; 
      message.objectId = ++objectId;
      utils.sendResponse(response, { objectId: 1 });
    });
  },
  'OPTIONS': (request, response) => { utils.sendResponse(response, null) }
};

module.exports = (request, response) => {
  let action = actions[request.method];
  action ? action(request, response) : utils.sendResponse(response, 'Not found', 404);
};