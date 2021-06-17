
const Sequelize = require("sequelize");
require('dotenv').config();


module.exports = new Sequelize(
    'SQLdatabase', 
    'admin',
    process.env.DB_PASSWORD,
    {
        host: 'sequelize-db3-instance-1.c3cqiki2awpm.us-east-2.rds.amazonaws.com',
        port:3306,
        dialect:"mysql", 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
})
