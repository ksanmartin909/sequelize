const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    
   context.callbackWaitsForEmptyEventLoop = false;
   
    connection.sync()
    .then(() => {

        Planets.findOne(
            { where: { id: event['id']}})
        .then(planet => {
            callback(null, planet); 
        });

    }).catch (error => callback(null, error));
  
    
};