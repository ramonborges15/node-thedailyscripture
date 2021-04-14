
const proxy = [
    {
      context: '/api',
      target: 'http://localhost:3333',
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;