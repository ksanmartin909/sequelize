//const Customers = require("./src/models/Customers");
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const Sequelize = require("sequelize");
const mysql2 = require('mysql2');
require('dotenv').config();


const connection = new Sequelize(
    'sequelizeTestDB', 
    'admin', 
    process.env.DB_PASSWORD,
    {
        host:'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com',
        port:3306,
        dialect:"mysql",  
        dialectModule: mysql2, 
        pool: {
            max: 5, // default connection pool size
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })

    const Customers = connection.define('customers');
    


exports.handler = function(event, context, callback){

        Customers.findOne({
            where: {
                id: 1
            }
        }).then(user => {
                callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
  

}