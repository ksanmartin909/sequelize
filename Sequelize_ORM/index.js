//const Customers = require("./src/models/Customers");
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const Sequelize = require("sequelize");
const mysql2 = require('mysql2')
require('dotenv').config()


const connection = new Sequelize(
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
    const Customers = connection.define('customers');



exports.handler = function(event, context, callback){


    
    connection.sync()
    .then(() => {
        Customers.findAll({
            where: {
                Name: 'Loren'
            }
        }).then(user => {

            var response = {
                "statusCode": 200,
                "body": JSON.stringify(user),
                "isBase64Encoded": false
            };
            callback(null, response);
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
    })    

}