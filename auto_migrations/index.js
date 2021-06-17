
const connection = require('./database/connection');
const Fishes = require('./models/fish')
const Sequelize = require('sequelize');

exports.handler = function(event, context, callback){
    
    connection.sync({alter:true})
    .then(() => {
        Fishes(connection,Sequelize)
        
        connection.models.Fish.findOne({
            where: {
                id: 1
            }
        }).then(user => {
                callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
    })    
}