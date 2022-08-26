import { DataTypes, Model } from 'sequelize';

const sequelize = require('../database/db');
const Activity = require('./Activity');

class Imagen extends Model {
    declare id: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare name: string;
    declare base64: any;
};

Imagen.init({
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
    base64: {
        type: DataTypes.BLOB('tiny'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: "imagenes"
});

Imagen.hasMany(Activity, {
    sourceKey: 'id',
    foreignKey: 'imagenId',
    as: 'activities'
});

Activity.belongsTo(Imagen, {
    targetKey: 'id',
    foreignKey: 'imagenId'
});

module.exports = Imagen;