'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'universidades',
      [
        {
          nombre:'Universidad Autónoma de Chihuahua',
          ciudad: 'Chihuahua',
          dirección: 'Av. Universidad y Av. Pascual Orozco',
          añoinicio: '1835',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          nombre:'Universidad Tecnologica de Chihuahua',
          ciudad: 'Chihuahua',
          dirección: 'Av. Montes Americanos',
          añoinicio: '2000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('universidades', null, {})
  },
}
