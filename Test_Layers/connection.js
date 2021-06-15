
const Sequelize = require("./nodejs/node_modules/sequelize");
const mysql2 = require('./nodejs/node_modules/mysql2');


module.exports = new Sequelize(
    'SQLdatabase', 
    'admin',
    'A3*w4N2p4**',
    {
        host: 'sequelize-db3-instance-1.c3cqiki2awpm.us-east-2.rds.amazonaws.com',
        port:3306,
        dialect:"mysql",  dialectModule: mysql2, 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
})
