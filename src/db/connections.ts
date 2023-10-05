import { Sequelize } from "sequelize";

const sequelize = new Sequelize ('ensi', 'root', '4354', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;