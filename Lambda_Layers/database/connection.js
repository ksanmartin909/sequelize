
const Sequelize = require("sequelize");
const mysql2 = require('mysql2');
require('dotenv').config();

module.exports = new Sequelize(
    'sequelizeTestDB', 
    'admin',
    process.env.DB_PASSWORD,
    {
        host: 'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com',
        port:3306,
        dialect:"mysql",  dialectModule: mysql2, 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
})
