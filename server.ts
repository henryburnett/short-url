const express = require('express');
const router = express.Router();
const cors = require('cors')
const db = require('./db')
const routes = require('./routes');

import { createKey } from './functions/functions'

const app = express()
const PORT = process.env.SERVER_PORT || 4000
const path = __dirname + '/views/';

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
    console.log(createKey())
})

export {}