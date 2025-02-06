COMP 3133 Lab Test 01 - Real-Time Chat Application

Hi, my name is Melina Behzadi Nejad, and this is my Chat Application project for COMP 3133 Lab Test 01. This application allows users to sign up, log in, join predefined chat rooms, and chat with other users in real-time. The app is built using a Node.js backend with Socket.io and MongoDB for persistence.
_________________________________________________________________________________________________________________________________
Features

User Authentication:
Users can sign up with a unique username.
Login functionality with password-based authentication.
Session Management is implemented using JSON Web Tokens (JWT) stored in the browser's localStorage.
Logout functionality to end the session.


Real-Time Messaging:
Users can send and receive real-time messages using Socket.io.
Messages are displayed immediately in the chat box when received.
Typing indicators are shown when a user is typing in the room.


Room-based Chat:
Users can join any room from a list of predefined rooms (e.g., NodeJS, DevOps, Cloud Computing).
Only users in the same room can send and receive messages from each other.
Users can leave rooms, and the chat history for that session is cleared.


Message Storage:
All chat messages are stored in MongoDB.
Message schemas include fields for the sender, room name, message content, and timestamp.
Users can view chat history when they join a room.

_________________________________________________________________________________________________________________________________

Technologies Used

Node.js (Server-side JavaScript runtime)
Express.js (Web framework for Node.js)
Socket.io (Real-time communication library)
MongoDB (NoSQL database for data persistence)
Mongoose (Object Data Modeling (ODM) library for MongoDB)
JWT (JSON Web Tokens) (Authentication and session management)
HTML5, CSS, Bootstrap (Frontend design and layout)
JavaScript (Frontend scripting)
_________________________________________________________________________________________________________________________________

The first page you see is the homepage after running the application in http://localhost:5050/index.html
<img width="1470" alt="home page" src="https://github.com/user-attachments/assets/a16d75c7-2f32-4c68-8059-36b8204710fc" />
_________________________________________________________________________________________________________________________________
Then you can either Sign Up:

<img width="1470" alt="Sign up page 1" src="https://github.com/user-attachments/assets/62757b53-38c0-4a62-9425-8bcccd63d861" />
_________________________________________________________________________________________________________________________________


Or Log In: 

<img width="1470" alt="Login Page 1" src="https://github.com/user-attachments/assets/d6f7280c-3ad1-4a4a-b744-1231c3c21595" />

_________________________________________________________________________________________________________________________________

After logging in you can join a room from a set of pre-defined rooms and chat with other users in those rooms:


<img width="1470" alt="Chat room" src="https://github.com/user-attachments/assets/c92c7585-22fe-4b90-9d06-a6a666099311" />




In this page you can also leave the room, and logout from your account by clicking on the "Logout" and "Leave Room" buttons.



_________________________________________________________________________________________________________________________________

If you leave a room you will see a message like this: 
<img width="1470" alt="Chat room after leaving the room" src="https://github.com/user-attachments/assets/9d7cf0a5-56f4-4db4-a122-e81bb3a1a19f" />

_________________________________________________________________________________________________________________________________

all the Users and Messages will be saved in the mongoDB database: 

<img width="1470" alt="Screenshot 2025-02-05 at 11 48 35 PM" src="https://github.com/user-attachments/assets/12edd7d9-96b8-4caa-8c39-cad2bbedc16a" />

<img width="1470" alt="Screenshot 2025-02-05 at 11 49 51 PM" src="https://github.com/user-attachments/assets/64c8491d-2a9c-4813-be8f-1f1db33968d7" />



