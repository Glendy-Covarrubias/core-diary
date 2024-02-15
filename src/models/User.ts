import { DataTypes, Model } from 'sequelize';

const sequelize = require('../database/db');
const Diary = require('./Diary');

export class User extends Model {
    declare id: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare firstName: string;
    declare lastName: string;
    declare birthday: Date | null;
    declare gender: Enumerator;
    declare username: string;
    declare password: string;
};

User.init({
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
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE
    },
    gender: {
        type: DataTypes.ENUM('Female', 'Male', 'Others'),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "users"
});

User.hasMany(Diary, {
    sourceKey: 'id',
    foreignKey: 'ownerId',
    as: 'diaries'
});

Diary.belongsTo(User, {
    targetKey: 'id',
    foreignKey: 'ownerId'
});

module.exports = User;