const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const server = express();

// Load config
dotenv.config({ path: './config/config.env' });

// middlewares
server.use(cors());
server.use(express.json());

// Make connection with the database
connectDB();

// Start server
server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running on port: 3000');
    }
});


