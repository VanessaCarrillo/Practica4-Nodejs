//controllers/universidades.js

const db = require('../models')

exports.getAllUniversidades = async (req, res, next) => {
    const allUniversidades = await db.universidades.findAll({
        attributes: ['id', 'nombre', 'ciudad', 'dirección', 'añoinicio', 'createdAt', 'updatedAt'],
        })
        res.status(200).send(allUniversidades)
}