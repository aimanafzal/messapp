const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const apiRoutes = require('../routes/api');
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
