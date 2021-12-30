'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        commentContent: 'Awesome',
        postId: 1
      },
      {
        commentContent: 'perfect food',
        postId: 1
      },
      {
        commentContent: 'perfect Healthy stuff',
        postId: 2
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
