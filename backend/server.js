const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

// Import routes
const userRoutes = require('./routes/userRoutes');
const weatherRoutes = require('./routes/weatherRoutes');  // Import the weather routes
const campaignRoutes = require('./routes/CampaignRoutes');// Import the campaign routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api', userRoutes);
app.use('/api', weatherRoutes);  // Register the weather routes
app.use('/api/campaigns', campaignRoutes); // Register campaign routes with /api/campaigns prefix

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
