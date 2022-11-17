require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { pinjamanRoute } = require('./routes')

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
app.use(express.json({limit: '25mb'}))
app.use(express.urlencoded({limit: '25mb'}))
app.use(express.json())

app.use('/pinjaman', pinjamanRoute)

app.listen(process.env.PORT, () => {
 console.log(`Server running on port ${process.env.PORT}`)
})