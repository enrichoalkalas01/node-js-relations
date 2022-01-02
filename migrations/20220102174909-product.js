'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Product', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: Sequelize.DataTypes.STRING,
      excerpt: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.STRING,
      price: Sequelize.DataTypes.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Product')
  }
};
