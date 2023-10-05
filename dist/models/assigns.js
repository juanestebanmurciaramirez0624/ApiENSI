"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assigns = void 0;
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const course_1 = require("./course");
const snack_1 = require("./snack");
exports.Assigns = connections_1.default.define('assigns', {
    idCourse: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: course_1.Course,
            key: 'id'
        }
    },
    idSnack: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: snack_1.Snack,
            key: 'id'
        }
    },
    allocatedAmount: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    assignedDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    }
});
