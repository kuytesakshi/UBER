const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')


const app = express()

app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello world...')
})
module.exports = app