
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world 1!')
})

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})
