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
const { error } = require('console')

app.get('/', (req, res) => {
    res.render('index', {msg: 'Mensaje desde el servidor'})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { user, name, role, password } = req.body

    let passwordHash = await bcryptjs.hash(password, 8)
    connection.query('INSERT INTO users SET ?', {user_name: user, full_name: name, role, pass: passwordHash}, async(error, results) => {
        if (error) {
            console.error(error)
        } else {
            res.render('register', {
                alert: true,
                alertTitle: 'Registro de usuario',
                alertMsg: '¡Regristo creado con exito!',
                alertIcon: 'success',
                showConfirmButton: false,
                time: 2500,
                ruta: ''
            })
        }
    })
})

app.listen(PORT, (req, res) => {
    console.log(`SERVER RUNNING IN http://localhost:${PORT}`)
})