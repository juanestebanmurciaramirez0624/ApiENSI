import { DataTypes } from "sequelize";
import sequelize from "../db/connections";
import { Course } from "./course";
import { Snack } from "./snack";

export const Assigns = sequelize.define('assigns', {
    idCourse: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    idSnack: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Snack,
            key: 'id'
        }
    },
    allocatedAmount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    assignedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});


