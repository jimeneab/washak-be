import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
    origin:'http://localhost:3000',
    optionSuccessstatus: 200
}

app.get('/api', cors(corsOptions), (_,res) => {
    res.json('Washak')
})

app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/roles', require('./routes/roles'))


module.exports = app;