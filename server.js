const express = require('express');
const cors = require('cors');
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
    } catch (error) {
        console.log(error)       
    }
})

app.listen('1234')