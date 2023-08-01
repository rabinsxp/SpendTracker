const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to SpendTracker API!');
});

// TODO: Add more routes for wallet integration and transaction handling

// Start the server
app.listen(port, () => {
  console.log(`SpendTracker API server is running on port ${port}`);
});
