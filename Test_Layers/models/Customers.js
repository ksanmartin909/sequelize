
// const AWS = require('aws-sdk');
// AWS.config.update({ region: 'us-east-2'});
const Sequelize = require('../nodejs/node_modules/sequelize');
const connection = require('../database/connection');


module.exports = connection.define('customers', {
        id: {
            type: Sequelize.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
    
        Name: Sequelize.STRING(),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

});
  


