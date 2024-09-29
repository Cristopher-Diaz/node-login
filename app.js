// Invocamos a express
const express = require('express')
const app = express()

// Set urlencoded para capturar datos del formulario
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Variables desde el .env
require('dotenv').config({path: './.env'})
const PORT = process.env.PORT || 3000

// Set directorio public
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('HOLA')
})

app.listen(PORT, (req, res) => {
    console.log(`SERVER RUNNING IN http://localhost:${PORT}`)
})