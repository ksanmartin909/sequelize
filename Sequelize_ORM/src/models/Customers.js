
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const Sequelize = require("sequelize");
const mysql2 = require('mysql2')
require('dotenv').config()

const host = 'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com';
const user = 'admin';
const password = process.env.DB_PASSWORD;
const database ='sequelizeTestDB';
const connection = new Sequelize( database, user, password,
    {
        host: host,
        port:3306,
        dialect:"mysql",  dialectModule: mysql2, 
        pool: {
            max: 5, // default connection pool size
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })

    const Customers = connection.define('customers', {
        id: {
            type: Sequelize.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
    
        Name: Sequelize.STRING(),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

    });
    return Customers;


