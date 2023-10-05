import { DataTypes } from "sequelize";
import sequelize from "../db/connections";

export const Course = sequelize.define('course', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    campus: {
        type: DataTypes.ENUM,
        values: ['Sede Principal','Sede Antonio Nariño','Sede Centro Piloto'],
        defaultValue: 'Sede Principal',
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    numberStudents:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },

    director:{
        type: DataTypes.STRING,
        allowNull: false
    },

    state:{
        type: DataTypes.ENUM,
        values: ['Activo', 'Inactivo'],
        defaultValue: 'Activo',
        allowNull: false
    },
});


