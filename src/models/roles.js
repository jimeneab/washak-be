const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('roles', schema)