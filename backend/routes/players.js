const express = require('express')
const router = express.Router()
const {
    getAllPlayers,
    getRandomPlayer,
    getSinglePlayer
} = require('../controllers/playerController')



router.get('/', getAllPlayers)
router.get('/random', getRandomPlayer)
router.get('/:id', getSinglePlayer)



module.exports = router