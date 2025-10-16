# 🤖 Chatbot

A simple yet powerful **full-stack chatbot application** built with **React.js** and **Node.js/Express**.  
It provides an interactive chat interface where users can communicate with an AI model or a rule-based backend logic.  
Designed as a learning project to demonstrate **frontend-backend integration**, **API communication**, and **scalable architecture**.

---

## 🚀 Features
- 💬 Real-time chat interface
- ⚙️ RESTful API communication between frontend and backend
- 🧠 Modular design — easily connect to AI APIs like Gemini or OpenAI
- 🎨 Responsive and minimal UI built with React
- 🪶 Simple structure — perfect for full-stack learners

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, HTML, CSS |
| **Backend** | Node.js, Express.js |
| **Language** | JavaScript |
| **API Communication** | REST (via Axios or Fetch) |

---

## 🧩 Architecture Overview

The project follows a **client–server model** with clear separation of concerns.

### **System Flow**

1. **User Interaction**  
   The user opens the chatbot web interface (React) and types a message.

2. **Frontend Processing**  
   - The React app captures the input.  
   - Sends the message to the backend via a REST API request (`POST /api/message`).  

3. **Backend Processing**  
   - The Express.js server receives the message.  
   - It can either:
     - Respond using predefined logic (rule-based), or  
     - Forward it to an external AI API (e.g., Gemini/OpenAI) for a dynamic response.  

4. **Response Handling**  
   - The backend receives the response and sends it back to the frontend in JSON format.  

5. **Display**  
   - The React UI updates instantly with the bot’s response.  
   - The conversation continues seamlessly.  

---

### **Folder Structure**
Chatbot/
│
├── backend/ # Node.js backend
│ ├── server.js # Entry point for Express server
│ ├── routes/ # API routes for chatbot communication
│ ├── controllers/ # Request handling logic
│ ├── package.json # Backend dependencies
│
├── frontend/ # React.js frontend
│ ├── src/
│ │ ├── components/ # Chat UI components
│ │ ├── pages/ # Main chat interface
│ │ ├── App.js # Root React component
│ │ └── index.js # Entry point for React app
│ ├── package.json # Frontend dependencies
│
└── README.md

---

### **Data Flow Summary**

| Step | From | To | Description |
|------|------|----|-------------|
| 1 | User | React Frontend | User types a message |
| 2 | React Frontend | Express Backend | Message sent via POST request |
| 3 | Express Backend | AI API (optional) | Forward message for AI response |
| 4 | AI API | Express Backend | AI returns reply |
| 5 | Express Backend | React Frontend | Backend sends response as JSON |
| 6 | React Frontend | User | Chatbot’s reply displayed on screen |

---

## ⚙️ Installation & Setup

Follow these steps to set up and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/amanshrikhande/Chatbot.git
cd Chatbot

# 2. Install dependencies for backend
cd backend
npm install

# 3. Install dependencies for frontend
cd ../frontend
npm install

# 4. Start backend server
npm start

# 5. Start frontend
npm run dev
