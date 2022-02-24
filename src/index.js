const app = require('./app')
require('./database')


app.listen(5000, () => {
    console.log('server is running in port 5000')
})

module.exports = app