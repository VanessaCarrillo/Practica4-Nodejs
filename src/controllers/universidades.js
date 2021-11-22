//controllers/universidades.js

const db = require('../models')

exports.getAllUniversidades = async (req, res, next) => {
    const allUniversidades = await db.Universidades.findAll({
        attributes: ['id', 'nombre', 'ciudad', 'direccion', 'añoinicio', 'fechacreacion'],
        })
        res.status(200).send(allUniversidades)
}