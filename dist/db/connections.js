"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('ensi', 'root', '4354', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = sequelize;
