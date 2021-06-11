const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define('customers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
    
        Name: DataTypes.STRING 
        
    })
    return customers;

}



