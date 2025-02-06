const express = require('express');
const { getMessages, sendMessage, sendPrivateMessage } = require('../controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Group messages routes
router.get('/:room', authMiddleware, getMessages);
router.post('/', authMiddleware, sendMessage);

// Private messages route
router.post('/private', authMiddleware, sendPrivateMessage);

module.exports = router;
