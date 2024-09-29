const mysql = require('mysql')
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})

connection.connect(error => {
  if (error) {
    console.error('El error de conexión es: ' + error)
    return
  }
  console.log('¡Conectado a la base de datos!')
})
module.exports = connection