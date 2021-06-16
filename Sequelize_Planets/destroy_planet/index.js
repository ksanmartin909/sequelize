const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    connection.sync()
    .then(() => {

        Planets.destroy(
            { where:  { name: event['name'] }})
        .then(result => {
            
            if(result == 0){
                callback(null, {"status": "Your planet could not be found."}); 
            } else {
                 callback(null, {"status": `The planet ${event['name']} has been destroyed!`});
            }
        }) 

    }).catch (error => callback(null, error));
};