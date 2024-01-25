require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twiter', (req, res) => {
    res.send('login to Twiter')
})

app.get('/instagram', (req, res) => {
    res.send('login to Instagram')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})