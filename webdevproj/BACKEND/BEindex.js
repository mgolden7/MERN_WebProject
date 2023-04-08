require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./CONFIG/dbConnect');

const app = express();

const port = process.env.port || 4000;

connectDB();

mongoose.connection.once('connected', () => {
    console.log('connected to mongo db')
    app.listen(port, () => {
        console.log(`server running on port ${port}. Press Crtl+c to terminate.`)
    })
})