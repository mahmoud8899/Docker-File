const express = require('express')
const app = express()
require('dotenv').config()
const os = require('os')


const data = {
    name : 'mahmoud',
    age : 33
}

app.get('/', (req,res)=>{
    res.status(200).send('hello nginx. ... .........')
})
  

app.get('/app', (req,res)=> res.status(200).send(data))
  

app.listen(process.env.PORT || 4000, ()=> console.log('server is runs.....',process.env.PORT))