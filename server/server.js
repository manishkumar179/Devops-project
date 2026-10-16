
const dotenv = require('dotenv')
dotenv.config();
const express = require('express')

const app = express()
let PORT= process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server started")
})









