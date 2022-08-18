const { Sequelize } = require('sequelize');
const { database } = require('../config');

// Option 3: Passing parameters separately (other dialects)
const sequelizeBD = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: 'postgres'
    }
);

module.exports = sequelizeBD;