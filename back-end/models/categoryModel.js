const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    name: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('Category', categorySchema)