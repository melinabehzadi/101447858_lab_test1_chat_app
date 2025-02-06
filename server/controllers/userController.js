const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Signup user
const signupUser = async (req, res) => {
    try {
        const { username, firstname, lastname, password } = req.body;

        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = await User.create({ username, firstname, lastname, password });
        res.status(201).json({ message: 'User created successfully', user: { username: newUser.username, firstname: newUser.firstname, lastname: newUser.lastname } });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token, user: { username: user.username, firstname: user.firstname, lastname: user.lastname } });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = { signupUser, loginUser };
