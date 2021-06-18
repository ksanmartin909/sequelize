'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fish.init({
    color: DataTypes.STRING,
    fins: DataTypes.STRING,
    prey: DataTypes.STRING,
  }, {
    sequelize,
    tableName:'Fishes',
    modelName: 'Fish',
  });
  
  return Fish;
};