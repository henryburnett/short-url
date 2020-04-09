const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.SERVER_PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})