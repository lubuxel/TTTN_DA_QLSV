'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subject.init({
    MAMH: DataTypes.STRING,
    TENMH: DataTypes.STRING,
    SOTC: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};