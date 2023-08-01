const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


const sequelize = require('./config/db');
require('./models/'); // Import the models to ensure they are registered


// Routes
const walletRoutes = require('./routes/walletRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
app.use('/api/wallets', walletRoutes);
app.use('/api/transactions', transactionRoutes);


// Start the server after authenticating the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`SpendTracker API server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = app;