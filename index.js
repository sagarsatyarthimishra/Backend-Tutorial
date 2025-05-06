require('dotenv').config()
const express = require('express')//importing express
const app = express()//creating express app
const port = process.env.PORT || 3000//setting port with fallback

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Sagar Satyarthi Mishra</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})