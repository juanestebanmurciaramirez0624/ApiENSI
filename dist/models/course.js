"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
exports.Course = connections_1.default.define('course', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    campus: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Sede Principal', 'Sede Antonio Nariño', 'Sede Centro Piloto'],
        defaultValue: 'Sede Principal',
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    numberStudents: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    director: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Activo', 'Inactivo'],
        defaultValue: 'Activo',
        allowNull: false
    },
});
