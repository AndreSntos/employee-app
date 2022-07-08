const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44386',
      secure: false, 
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];module.exports = proxy;