"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snack = void 0;
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const user_1 = require("./user");
exports.Snack = connections_1.default.define('snack', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    typeSnack: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Refrigerado', 'No refrigerado'],
        defaultValue: 'Refrigerado',
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['Activo', 'Inactivo'],
        defaultValue: 'Activo',
        allowNull: false
    },
    idUser: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: user_1.User,
            key: 'id'
        }
    }
});
