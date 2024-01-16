const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    age : {
        type: String
    },
    height : {
        type: String
    },
    country : {
        type: String
    },
    pos : {
        type: String
    },
    foot: {
        type: String
    },
    club : {
        type: String
    },
    photo: {
        type: String
    }
})

module.exports = mongoose.model('Player', playerSchema)