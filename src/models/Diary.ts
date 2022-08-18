const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Diary extends Model {};

Diary.init({
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: "diary"
});

module.exports = Diary;