const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstname: String,
    lastname: String,
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
