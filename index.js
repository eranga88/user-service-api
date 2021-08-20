const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => [
  {
    name:' Eranga',
    email: 'eranga.singappuli@gmail.com'
  }
])

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})