// Require necessary modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection setup
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri, {
 
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit with error
});

// Define routes or additional app configurations below

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
