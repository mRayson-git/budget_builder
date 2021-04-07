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

// Set static folder for built angular front end
server.use(express.static(path.join(__dirname, 'public')));

// Routes for rest api
server.use('/api/v1/profiles', require('./routes/v1/profiles'));

// Start server
server.listen(3001, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running on port: 3000');
    }
});


