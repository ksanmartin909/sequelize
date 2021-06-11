//const Customers = require("./src/models/Customers");
const AWS = require('aws-sdk');
const Sequelize = require("sequelize");
AWS.config.update({ region: 'us-east-2'});


const host = 'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com';
const user = 'admin';
const password = 'PassioN12345**';
const database ='sequelizeTestDB';
const sequelize = new Sequelize( database, user, password, {host: host, dialect:"mysql", dialectOptions: {ssl:'Amazon RDS'}})



// require('dotenv').config()




// module.exports = async () => {
//     const connection = new Sequelize( database, user, password, {host: host, dialect:"mysql"})

//     Customer.findAll({where: {Name: 'Jane'}})
// }

exports.handler = function(event, context, callback){

    const Customers = sequelize.define('customer', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
    
        Name: Sequelize.STRING 
    });


      sequelize.sync()
     .then(() => {
        Customers.findAll({
            where: {
                Name: 'Jane'
            }
        }).then(user => {
            callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
     })
    
    const name = 'Kristen'
    callback(null, name)
}