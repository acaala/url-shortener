const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello from server')
})

app.listen(process.env.PORT || 5000)
console.log(`Listening on Port: ${process.env.PORT || 5000}`)