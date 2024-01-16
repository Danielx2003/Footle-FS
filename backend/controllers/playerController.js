const Player = require('../models/playerModel')
const mongoose = require('mongoose')

const getAllPlayers = async (req, res) => {
    const players = await Player.find({})
    res.status(200).json(players)
}

const getRandomPlayer = async (req, res) => {
    const player = await Player.aggregate([{ $sample: { size: 1 } }])
    res.status(200).json(player)
}

const getSinglePlayer = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such player' })
    }

    const player = await Player.findById(id)
    if (!player) {
        return res.status(404).json({ error: 'No such player' })
    }
    res.status(200).json(player)
}

module.exports = {
    getAllPlayers,
    getRandomPlayer,
    getSinglePlayer
}