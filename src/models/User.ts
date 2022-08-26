//import { Model, DataTypes } from "sequelize";

import {  DataTypes, Model } from 'sequelize';
//import { sequelize } from '../database/db';
//import { Diary } from './Diary';

const sequelize = require('../database/db');
const Diary = require('./Diary');
  

//var sequelize = require('../database/db');
//var { Diary } = require('./Diary');

export class User extends Model {
    declare id: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare firstName: string;
    declare lastName: string;
    declare birthday: Date | null;
    declare gender: Enumerator; /**Comoponer Enum */
    /*declare static associations: {
        diaries: Association<User, Diary>;
    };*/
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