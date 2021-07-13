const express = require('express')
const urlController = require('../controllers/urlController')

const router = express.Router()

router.get('/', urlController.index)

router.post('/shortUrls', urlController.create)

router.get('/:shortUrl', urlController.redirect)

module.exports = router