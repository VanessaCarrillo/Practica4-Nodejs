require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

const universidadRouter = require('./routes/universidades')

app.use('/universidades', universidadRouter)

app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`)
})

module.exports = app