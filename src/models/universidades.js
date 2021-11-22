'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class universidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  universidades.init({
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    dirección: DataTypes.STRING,
    añoinicio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'universidades',
  });
  return universidades;
};