//routes/universidades.js

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('You have hit GET /universidades endpoint')
})

module.exports = router