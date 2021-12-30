'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookauthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookauthor.belongsTo(models.book, { 
        foreignKey: 'bookId',  
      });
      bookauthor.belongsTo(models.author, { 
        foreignKey: 'authorId', 
      });
    }
  };
  bookauthor.init({
    authorId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookauthor',
    timestamps: false
  });
  return bookauthor;
};