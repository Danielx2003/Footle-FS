const express = require('express')
const router = express.Router()
const {
    getPlayers,
    getRandomPlayer,
    getSinglePlayer
} = require('../controllers/playerController')

router.get('/search/:name', getPlayers)
router.get('/random', getRandomPlayer)
router.get('/:id', getSinglePlayer)



module.exports = router