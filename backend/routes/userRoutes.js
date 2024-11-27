const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// User registration route
router.post('/signup', registerUser);

// User login route
router.post('/signin', loginUser);

module.exports = router;
