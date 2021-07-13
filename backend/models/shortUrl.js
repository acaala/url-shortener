const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const nanoId = nanoid(4)


const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: nanoId
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)