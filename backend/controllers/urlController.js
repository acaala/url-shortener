const ShortUrl = require('../models/shortUrl')

const index = async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.json({ shortUrls })
}

const create = async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    res.json({ redirect: '/'})
}

const redirect = async (req, res) => {
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl })
    if(shortUrl == null ) return res.sendStatus(404)
    res.json({ redirect: shortUrl.full })
  }

  module.exports = {
      index,
      create,
      redirect
  }