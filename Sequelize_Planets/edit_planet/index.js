const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    connection.sync()
    .then(() => {
        
        Planets.update(
            {name: JSON.parse(event['body'])['name']}, 
            {where: {id: event['pathParameters']['id']}})
            
        .then(result => {
            
            var status = {};
            
            if(result==0){
                status = {"status" : "Your planet could not be found."};
            } else {
                status = {"status" : `Your planet has been renamed to ${JSON.parse(event['body'])['name']} `};
            }
            
            const response = {
                statusCode: 200,
                body: JSON.stringify(status)
            };
            callback(null, response);
            
        });
    }).catch (error => {
        
            const response = {
                statusCode: 400,
                body: JSON.stringify(event)
            };
            callback(null, response);
            
        });
};