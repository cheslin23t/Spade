const express = require('express')
var app = express()


app.get("/", (req, res) => {
  res.send("Online!")
})

app.listen(8080)