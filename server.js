// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port
const port = 3000;

// Route handler for the homepage (/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route handler for the contact page (/contact)
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
