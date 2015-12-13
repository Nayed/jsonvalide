'use strict'

import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('React app will goy here')
})

const server = app.listen(9000, () => {
    let port = server.address().port
    console.log(`Server running at http://localhost:${port}`)
})