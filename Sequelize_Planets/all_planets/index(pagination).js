const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){

    context.callbackWaitsForEmptyEventLoop = false;
    
    
    const page = isNaN(event['page'])? 0 : parseInt(event['page'])
    const size = isNaN(event['size'])? 0 : parseInt(event['size'])
    
    connection.sync()
    .then(() => {
     
        // Planets.findAndCountAll({
        Planets.findAll({
            
            limit: size,
            offset:page * size
            
        }) 
        .then(planets => {
            callback(null, planets);  
        });
        
    }).catch(error => callback(null, error));
};