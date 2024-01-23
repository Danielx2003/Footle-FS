const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const playerRoutes = require('./routes/players')

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/players', playerRoutes)

mongoose.connect(process.env.URI)
    .then(() => {
        console.log("in mongoose")
        app.listen(process.env.PORT, () => {
            console.log("Connected and listening on Port 4000")
        });
    })
    .catch((err) => {
        console.log(err.message)
    })
