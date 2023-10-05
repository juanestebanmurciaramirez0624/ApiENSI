"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
exports.User = connections_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Masculino', 'Femenino'],
        allowNull: false
    },
    typeDocument: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['T.I', 'C.C', 'C.E'],
        defaultValue: 'C.C',
        allowNull: false
    },
    document: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        unique: true,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Administrador', 'Coordinador', 'Auxiliar'],
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Activo', 'Inactivo'],
        defaultValue: 'Activo',
        allowNull: false
    }
});
