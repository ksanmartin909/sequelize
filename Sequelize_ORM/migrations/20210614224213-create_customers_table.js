'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers",{
        id: {
          type: Sequelize.INTEGER(),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true
      },

      Name: Sequelize.STRING(),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("customers");
  }
};
