// 'use strict';
const Sequelize = require('sequelize');
const Test = require('./test')
const ErrorsReact = require('./errorsReact')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Test = Test;
Test.init(sequelize);
ErrorsReact.init(sequelize);

// Test.associate(db);

module.exports = db;
