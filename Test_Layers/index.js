
const connection = require('/opt/database/connection');
const Customers = require('/opt/models/Customers');



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