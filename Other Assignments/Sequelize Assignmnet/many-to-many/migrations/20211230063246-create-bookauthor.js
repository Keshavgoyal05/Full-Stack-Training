'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookauthors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorId: {
        type: Sequelize.INTEGER,
        references:{
           model:{
             tableName:"authors"
          },
          key:"id"
        },
        allowNull:false
      },
      bookId: {
        type: Sequelize.INTEGER,
        references:{
           model:{
             tableName:"books"
          },
           key:"id"
         },
        allowNull:false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookauthors');
  }
};