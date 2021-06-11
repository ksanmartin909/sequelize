const Customers = require("./src/models/Customers");
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const connection = require('./connection');



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