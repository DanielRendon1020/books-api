const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

app.use('/books', require('./controllers/books'))

app.get('/', (req, res) => {
    res.send('Hello 👋')
})

app.get('*', (req, res) => {
    res.status(404).send('Get atta here!')
})


app.listen(process.env.PORT)