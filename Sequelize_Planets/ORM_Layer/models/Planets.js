const Sequelize = require('../nodejs/node_modules/sequelize');
const connection = require('../database/connection');


module.exports = connection.define('Planets', {
        id: {
            type: Sequelize.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
    
        name: Sequelize.STRING(),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

});