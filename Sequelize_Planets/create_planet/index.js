const connection = require('/opt/database/connection');
const Planets = require('/opt/models/Planets');


exports.handler = function(event, context, callback){
    var result={};
    connection.sync()
    .then(() => {

        Planets.create({
            name: event['name']

        }).then(planet => {
                callback(null, planet.dataValues);  

        }).catch (error => {
                result = error;
        });
    });
    
};