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

// Establecer motor de plantillas
app.set('view engine', 'ejs')

// Invocamos a bcryptjs
const bcryptjs = require('bcryptjs')

// Var de session
const session = require('express-session')
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Invocamos al módulo de conexión a la DB
const connection = require('./database/db')

app.get('/', (req, res) => {
    res.send('HOLA')
})

app.listen(PORT, (req, res) => {
    console.log(`SERVER RUNNING IN http://localhost:${PORT}`)
})