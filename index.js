const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Response from server 1'
    })
})

app.listen(8080, () => {
    console.log('server running in http://localhost:8080')
})