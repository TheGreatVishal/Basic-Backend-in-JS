require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter')
})

app.get('/login',(req,res)=>{
    res.send("<h1> Give your Login details </h1>")
})

app.get('/testing',(req,res)=>{
    let x = Math.floor(Math.random()*1000);
    res.send(`${x}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})