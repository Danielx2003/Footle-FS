const Player = require('../models/playerModel')
const mongoose = require('mongoose')

const getPlayers = async(req,res) => {
    const players = await Players.find({}).sort().limit(5)
    
}