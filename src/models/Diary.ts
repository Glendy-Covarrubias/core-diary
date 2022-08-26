import { DataTypes, Model } from 'sequelize';

const sequelize = require('../database/db');
const Activity = require('./Activity');

class Diary extends Model {
    declare id: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare name: string;
    declare priority: number;
    declare status: any;
    declare description: string | null;
};

Diary.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
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
    status: {
        type: DataTypes.ENUM('Process', 'Stopped', 'Done'),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "diaries"
});

Diary.hasMany(Activity, {
    sourceKey: 'id',
    foreignKey: 'diaryId',
    as: 'activities'
});

Activity.belongsTo(Diary, {
    targetKey: 'id',
    foreignKey: 'diaryId'
});

module.exports = Diary;