import { DataTypes } from "sequelize";
import sequelize from "../db/connections";
import { User } from "./user";

export const Snack = sequelize.define('snack', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },

    typeSnack:{
        type: DataTypes.ENUM,
        values: ['Refrigerado','No refrigerado'],
        defaultValue: 'Refrigerado',
        allowNull: false
    },

    state:{
        type: DataTypes.ENUM,
        values: ['Activo', 'Inactivo'],
        defaultValue: 'Activo',
        allowNull: false
    },

    idUser:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: User,
            key: 'id' 
    }
}
});


