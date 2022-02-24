const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        minlength: 5,
        required: true,
        pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    role: {
        ref: "roles",
        type: mongoose.Schema.Types.ObjectId
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('users', schema)