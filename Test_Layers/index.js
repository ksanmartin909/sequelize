
const connection = require('/opt/connection');



exports.handler = function(event, context, callback){
    
    connection.sync()
    .then(() => {
       callback(null, "yes")
    })    

}