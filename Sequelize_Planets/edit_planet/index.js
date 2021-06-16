const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    connection.sync()
    .then(() => {
        
        Planets.update(
            {name: event['name']}, 
            {where: {id: event['id']}})
        .then(result => {
            
            if(result==0){
                callback(null, {"status" : "Your planet could not be found."});
            } else {
                callback(null, {"status" : `Your planet has been renamed to ${event['name']} `});
            }
        });
   
    }).catch (error => callback(null, error));
         
};