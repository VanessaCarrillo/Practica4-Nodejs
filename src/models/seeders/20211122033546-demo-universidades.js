'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    await queryInterface.createTable('universidades',
        {
          id: {
            allowNull:false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          nombre: {
            type: Sequelize.STRING
          },
          ciudad: {
            type: Sequelize.STRING
          },
          dirección: {
            type: Sequelize.STRING
          },
          añoinicio: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        }
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
