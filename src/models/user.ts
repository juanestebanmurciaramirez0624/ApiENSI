import { DataTypes } from "sequelize";
import sequelize from "../db/connections";

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    gender:{
        type: DataTypes.ENUM,
        values: ['Masculino','Femenino'],
        allowNull: false
    },

    typeDocument:{
        type: DataTypes.ENUM,
        values: ['T.I', 'C.C', 'C.E'],
        defaultValue: 'C.C',
        allowNull: false
    },

    document:{
        type: DataTypes.INTEGER.UNSIGNED,
        unique: true,
        allowNull: false
    },

    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false
    },

    address:{
        type: DataTypes.STRING,
        allowNull: false
    },

    role:{
        type: DataTypes.ENUM,
        values: ['Administrador', 'Coordinador', 'Auxiliar'],
        allowNull: false
    },

    username:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    state:{
        type: DataTypes.ENUM,
        values: ['Activo', 'Inactivo'],
        defaultValue: 'Activo',
        allowNull: false
    }
});