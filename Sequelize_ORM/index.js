const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const Customers = require("./models/Customers");
const connection = require('./database/connection');



exports.handler = function(event, context, callback){
    
    connection.sync()
    .then(() => {
        Customers.findOne({
            where: {
                id: event['customerId']
            }
        }).then(user => {
                callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
    })    

}