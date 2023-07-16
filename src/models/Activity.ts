import { DataTypes, Model } from 'sequelize';

const sequelize = require('../database/db');

class Activity extends Model {
    declare id: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare name: string;
    declare priority: number;
    declare time: number;
    declare status: any;
    declare description: string | null;
};

Activity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM('Process', 'Stopped', 'Done'),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "activities"
});

module.exports = Activity;