// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Access the API key using the process.env object
const apiKey = process.env.API_KEY;

// Import the node-fetch package
import fetch from 'node-fetch';

// Import the express and cors packages
import express from 'express';
import cors from 'cors';

const app = express();

// Use cors middleware
app.use(cors());

// Set up a route that the client can request
app.get('/api', async (req, res) => {
    try {
        const response = await fetch(`https://freesound.org/apiv2/search/text/?query=cars&token=${apiKey}`);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(3000, () => console.log('Server started'));
