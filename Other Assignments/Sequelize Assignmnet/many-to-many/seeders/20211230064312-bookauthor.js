'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookauthors', [
      {
        authorId: 1,
        bookId: 1
      },
      {
        authorId: 2,
        bookId: 1
      },
      {
        authorId: 1,
        bookId: 1
      },
      {
        authorId: 1,
        bookId: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
