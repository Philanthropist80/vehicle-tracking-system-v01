require('@babel/register');

const dbConfig = require('./api/config/database');

module.exports = Object.assign({}, dbConfig.default);