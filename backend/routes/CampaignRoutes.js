const express = require('express');
const Campaign = require('../models/Campaign');

const router = express.Router();

// POST route to create a new campaign
router.post('/', async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(200).json({ message: 'Campaign submitted successfully!' });
  } catch (error) {
    console.error('Error submitting campaign:', error);
    res.status(500).json({ message: 'Error submitting campaign', error });
  }
});

// GET route to retrieve all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
});

module.exports = router;
