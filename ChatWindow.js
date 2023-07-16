import React, { useState } from "react";

const ChatWindow = ({ match, conversations, setConversations }) => {
  const { contactName } = match.params;
  const [inputText, setInputText] = useState("");

  const currentConversation = conversations.find(
    (conversation) => conversation.contactName === contactName
  );

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: currentConversation.messages.length + 1,
      text: inputText,
      timestamp: Date.now(),
    };

    const updatedConversations = conversations.map((conversation) =>
      conversation.contactName === contactName
        ? {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          }
        : conversation
    );

    setConversations(updatedConversations);
    setInputText("");
  };

  return (
    <div className="chat-window">
      <h2>{contactName}</h2>
      <div className="messages">
        {currentConversation?.messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
