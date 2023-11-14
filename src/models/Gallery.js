const mongoose = require('mongoose');

const Gallery = mongoose.Schema({
    category:String,
    link:String
})

module.exports = mongoose.model('gallery',Gallery);