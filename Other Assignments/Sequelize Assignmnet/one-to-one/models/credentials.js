'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Credentials.belongsTo(models.UserDetails,{
        foreignKey: 'userId'
      });
      
    }
  };
  Credentials.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Credentials',
  });
 
  return Credentials;
};