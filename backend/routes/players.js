const express = require('express')
const router = express.Router()
const Player = require('../models/playerModel')

router.get('/', (req,res) => {
    res.json({mssg: 'GET all players'})
})

router.get('/:id', (req,res) => {
    res.json({mssg:"GET a single workout"})
})

module.exports = router