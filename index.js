<<<<<<< HEAD
str = 'Hello'
console.log(str)

function addUser(){
  console.log('User added')
}

addUser()
=======
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})
>>>>>>> 3c184ed (feat: add webserver)
