require('dotenv').config()
const express = require('express')

const db = require('./models')
const createSeeds = require('./models/seeders')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const universidadRouter = require('./routes/universidades')
app.use('/universidades', universidadRouter)

const seed = process.argv[2]
if (seed) {
    db.sequelize
    .sync({ force: true })
    .then(() => {
        createSeeds()
    })
    .catch((err) => {
        console.error(err)
        })
} else {
    db.sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.info(`App listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err)
    })
}
module.exports = app