import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";
import "./App.css";

const App = () => {
  const [conversations, setConversations] = useState([]);

  // Load dummy data from the JSON file (you can use Axios or fetch in a real app)
  useState(() => {
    fetch("/dummyData.json")
      .then((response) => response.json())
      .then((data) => setConversations(data));
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="sidebar">
          <Link to="/">Home</Link>
          <ConversationList conversations={conversations} />
        </div>
        <div className="content">
          <Routes
            path="/chat/:contactName"
            render={(props) => (
              <ChatWindow
                {...props}
                conversations={conversations}
                setConversations={setConversations}
              />
            )}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
