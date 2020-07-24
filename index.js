const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) =>{
    res.send('I am alive')
})

app.listen(PORT, HOST)