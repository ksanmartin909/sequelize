
const connection = require('/opt/database/connection');
const Sequelize = require('sequelize');
const Model = require('/opt/models/fish')
const Fish = Model(connection,Sequelize)

exports.handler = function(event, context, callback){
    
    connection.sync({alter:true})
    .then(() => {
        
        Fish.findOne({
            where: {
                id: event['id']
            }
        }).then(user => {
                callback(null, user)
        }).catch (error => {
                console.log("CONSOLE LOG")
                callback(null,error)
        })
    })    
}