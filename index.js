const express = require('express')
const app = express()
const cors = require('cors')
const instructors = require('./data/instructors.json')


app.use(cors())

const port = process.env.port || 5000;

app.get('/instructors', (req, res) => {
    res.send(instructors)
})

app.listen(port, () => {
    console.log('app is running in port', port)
})