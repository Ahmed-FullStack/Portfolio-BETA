const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000
}
app.listen(port)