const Message = require('../models/Message');
const PrivateMessage = require('../models/PrivateMessage');

// Fetch messages from a room
const getMessages = async (req, res) => {
    try {
        const { room } = req.params;

        // Ensure the room is valid (add predefined room check if needed)
        if (!room) return res.status(400).json({ message: 'Room name is required' });

        // Retrieve group messages
        let messages = await Message.find({ room }).lean().sort({ date_sent: 1 });

        // Format date before sending
        messages = messages.map(msg => ({
            ...msg,
            date_sent: new Date(msg.date_sent).toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'short' })
        }));

        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Send a message to a room
const sendMessage = async (req, res) => {
    try {
        const { from_user, room, message } = req.body;

        if (!from_user || !room || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newMessage = await Message.create({ from_user, room, message });
        res.status(201).json({ message: 'Message sent', messageData: newMessage });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Send a private message between users
const sendPrivateMessage = async (req, res) => {
    try {
        const { from_user, to_user, message } = req.body;

        if (!from_user || !to_user || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newMessage = await PrivateMessage.create({ from_user, to_user, message });
        res.status(201).json({ message: 'Private message sent', messageData: newMessage });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = { getMessages, sendMessage, sendPrivateMessage };
