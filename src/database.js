const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://jimeneab:zIZEokrK6LYrvWvb@cluster0.jquoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(db => {
    console.log("DB is connected")
}).catch(error => {
    console.log(error)
})