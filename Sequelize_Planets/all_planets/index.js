const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    
    context.callbackWaitsForEmptyEventLoop = false;

    connection.sync()
    .then(() => {
        
        Planets.findAll()
        .then(planets => {
            callback(null, planets);  
        });
        
    }).catch(error => callback(null, error));
};