const express = require('express')
const app = express()
const cors = require('cors')
const instructors = require('./data/instructors.json')
const courses = require('./data/courses.json')

app.use(cors())

const port = process.env.port || 5000;

app.get('/instructors', (req, res) => {
    res.send(instructors)
})

app.get('/instructors/:id', (req, res) => {
    const id = req.params.id
    const singleInstructor = instructors.find(i => i.id === id)
    res.send(singleInstructor)
})


app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const singleCourse = courses.find(c => c.id === id)
    res.send(singleCourse)
})
app.listen(port, () => {
    console.log('app is running in port', port)
})