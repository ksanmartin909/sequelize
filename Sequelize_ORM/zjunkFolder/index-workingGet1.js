//const Customers = require("./src/models/Customers");
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const Sequelize = require("sequelize");
const mysql2 = require('mysql2')


const host = 'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com';
const user = 'admin';
const password = 'PassioN12345**';
const database ='sequelizeTestDB';
const connection = new Sequelize( database, user, password, {host: host, port:3306, dialect:"mysql",  dialectModule: mysql2})



// require('dotenv').config()




// module.exports = async () => {
//     const connection = new Sequelize( database, user, password, {host: host, dialect:"mysql"})

//     Customer.findAll({where: {Name: 'Jane'}})
// }

exports.handler = function(event, context, callback){

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
    
    connection.sync()
    .then(() => {
        Customers.findAll({
            where: {
                Name: 'Loren'
            }
        }).then(user => {
                callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
    })    
    // const name = 'Kristen'
    // callback(null, name)
}