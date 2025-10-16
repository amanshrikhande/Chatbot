# 🤖 Chatbot

A full-stack chatbot application built with **React.js** (frontend) and **Node.js/Express** (backend), with **MongoDB** for data persistence.  
You can run it locally, and it’s designed to be extended (e.g. hook it up to external AI APIs, memory, user accounts, etc.).

---

## 🚀 Features

- Real-time chat interface  
- Communication between frontend and backend via REST API  
- Storage of chat messages or history using MongoDB  
- Modular backend so you can plug in AI logic (OpenAI, Gemini, etc.)  
- Clean and minimal UI  

---

## 🧱 Tech Stack

| Layer        | Technology                        |
|----------------|--------------------------------------|
| Frontend     | React.js, HTML, CSS                 |
| Backend      | Node.js, Express.js                 |
| Database     | MongoDB (via Mongoose or native driver) |
| API Layer    | REST API (JSON over HTTP)            |
| Language     | JavaScript / Node.js                 |

---

## 🧩 Architecture & Data Flow

### System Flow

1. **User Interaction**  
   The user opens the web UI (React) and types a message.

2. **Frontend → Backend**  
   The React app captures this message and issues an HTTP request to the backend (e.g. `POST /api/message`).

3. **Backend Processing**  
   The Express server receives the message.  
   It can:
   - Use built-in logic / rules to generate a response, **or**
   - Forward it to an external AI API (OpenAI / Gemini / etc.) to get a dynamic response.

4. **Persistence (MongoDB)**  
   The backend, before or after generating the response, can store the user message + bot response in MongoDB for history or analytics.

5. **Response → Frontend**  
   The backend returns a JSON object containing the response text (and optionally metadata).  
   The React app displays it in the chat window.

6. **Conversation continues**  
   The user sends more messages, repeating the cycle.

---

### Folder Structure

Chatbot/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ │ └── chat.js
│ ├── controllers/
│ │ └── chatController.js
│ ├── models/
│ │ └── Message.js # MongoDB schema for messages
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Chat UI, message list, input box
│ │ ├── pages/ # Main chat page
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md

You may have slight differences — adjust accordingly.

---

## ⚙️ Installation & Setup

Follow these steps to get it running locally:

```bash
# 1. Clone the repository
git clone https://github.com/amanshrikhande/Chatbot.git
cd Chatbot

# 2. Backend dependencies
cd backend
npm install

# 3. Frontend dependencies
cd ../frontend
npm install

# 4. Setup environment variables for backend
# In backend folder, create .env file with at least:
#   MONGO_URI=your_mongodb_connection_string
#   PORT=5000 (or whatever port)

You may have slight differences — adjust accordingly.

---

## ⚙️ Installation & Setup

Follow these steps to get it running locally:

```bash
# 1. Clone the repository
git clone https://github.com/amanshrikhande/Chatbot.git
cd Chatbot

# 2. Backend dependencies
cd backend
npm install

# 3. Frontend dependencies
cd ../frontend
npm install

# 4. Setup environment variables for backend
# In backend folder, create .env file with at least:
#   MONGO_URI=your_mongodb_connection_string
#   PORT=5000 (or whatever port)
