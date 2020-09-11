// 'use strict';
const Sequelize = require('sequelize');
const ErrorsReact = require('./errorsReact')
const User = require('./user')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.ErrorsReact = ErrorsReact;
db.User = User;

ErrorsReact.init(sequelize);
User.init(sequelize);

// Test.associate(db);

module.exports = db;
