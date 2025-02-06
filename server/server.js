require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(express.static(path.join(__dirname, '../view')));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('joinRoom', (room) => {
        if (!room) return;
        socket.join(room);
        console.log(`User joined room: ${room}`);
    });

    socket.on('leaveRoom', (room) => {
        if (!room) return;
        socket.leave(room);
        console.log(`User left room: ${room}`);
    });

    socket.on('chatMessage', (msgData) => {
        io.to(msgData.room).emit('message', msgData);
    });

    let typingUsers = {};

    socket.on('typing', (data) => {
        typingUsers[socket.id] = data.user;
        socket.to(data.room).emit('userTyping', { user: data.user });
    });

    socket.on('stopTyping', (data) => {
        delete typingUsers[socket.id];
        socket.to(data.room).emit('userStoppedTyping', { user: data.user });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
