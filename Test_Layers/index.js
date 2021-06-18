
const connection = require('/opt/database/connection');
const Fishes = require('/opt/models/Fishes');



exports.handler = function(event, context, callback){
    
    connection.sync()
    .then(() => {
        Fishes.findOne({
            where: {
                id: event['fish']
            }
        }).then(user => {
                callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
    })    
}