const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host: '192.168.1.123',
//   user: 'root',
//   password: 'Dnpl@2015',
//   port:3309,
//   database: 'mohit'
// })

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port:3306,
  database: 'db'
})

connection.connect()
module.exports=connection

