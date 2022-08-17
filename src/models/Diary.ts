import { DataTypes } from 'sequelize';

const sequelize = require('../database/db');

const Diary = sequelize.define('diarys', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = Diary;