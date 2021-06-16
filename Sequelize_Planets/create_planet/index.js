const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    connection.sync()
    .then(() => {

        Planets.create({
            name: JSON.parse(event['body'])['name']
        })
        .then(planet => {
            
            const response = {
                statusCode: 200,
                  body: JSON.stringify(planet)
            };
            callback(null, response); 
            
        });
        
    }).catch(error => {
        
        const response = {
            statusCode: 400,
              body: JSON.stringify(event)
        };
        callback(null,response);
        
    });
};
