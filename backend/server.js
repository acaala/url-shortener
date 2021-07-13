require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

const dbURI = process.env.DB_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.json({ shortUrls })
})

app.post('/shortUrls', async (req, res) => {
    console.log({ full: req.body.fullUrl })
    await ShortUrl.create({ full: req.body.fullUrl })
    res.json({ redirect: '/'})
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl })
  
  if(shortUrl == null ) return res.sendStatus(404)

  // res.json({ redirect: shortUrl.full })
})

app.listen(process.env.PORT || 5000)
console.log(`Listening on Port: ${process.env.PORT || 5000}`)