//routes/universidades.js

const express = require('express')
const router = express.Router()
const universidadesController = require('../controllers/universidades')

router.get('/', universidadesController.getAllUniversidades)

module.exports = router