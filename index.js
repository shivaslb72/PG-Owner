const express = require('express')
const setupDB = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3032

setupDB()
app.use(express.json())
app.use('/',router)

app.listen(port,()=>{
    console.log('connected to port',port)
})