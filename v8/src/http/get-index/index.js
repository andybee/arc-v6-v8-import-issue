const view = require('./views');

exports.handler = async (event) => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/html',
  },
  body: view(),
});
