const Sequelize = require("sequelize");

const host = 'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com';
const user = 'admin';
const password = 'PassioN12345**';
const database ='sequelizeTestDB';


const connection = new Sequelize( database, user, password, {host: host, dialect:"mysql"})

module.exports = connection;
global.sequelize = connection;