//seeders/index.js

const db = require('../index')
const chance = require('chance').Chance()
const faker = require('faker')

const createSeeds = async () => {
    const universidadesCount = 3

    chance.mixin({
        universidad: function () {
            return {
                nombre: chance.sentence({ words: 5}),
                ciudad: chance.sentence({ words: 4}),
                dirección: chance.sentence({ words: 10}),
                añoinicio: chance.sentence({ words: 1}),
                createdAt: chance.date(),
                updatedAt: chance.date()
            }
        },
    })
    for (let index = 0; index < universidadesCount; index++){
        const universidad = await db.universidades.create(chance.universidad())
    }
    for(let index = 0; index < universidadesCount; index++){
        const universidad = await db.universidades.create({
            nombre: faker.name.findName(),
            ciudad: faker.lorem.sentence(),
            dirección: faker.address.streetAddress(),
            añoinicio: faker.date.weekday(),
            createdAt: faker.date.recent(2),
            updatedAt: faker.date.recent(2)
        })
    }

}

module.exports = createSeeds