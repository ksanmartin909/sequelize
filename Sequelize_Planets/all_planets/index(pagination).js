const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){

    context.callbackWaitsForEmptyEventLoop = false;
    
    const page= parseInt(event['page']);
    const size = parseInt(event['size']);
    
    connection.sync()
    .then(() => {
     
        Planets.findAndCountAll({
            
            limit: size,
            offset:page * size
            
        }) 
        .then(planets => {
            callback(null, planets);  
        });
        
    }).catch(error => callback(null, error));
};