import React from "react";
import { Link } from "react-router-dom";

const ConversationList = ({ conversations }) => {
  return (
    <div className="conversation-list">
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <Link to={`/chat/${conversation.contactName}`}>
              {conversation.contactName}
            </Link>
            <p>{conversation.messages.slice(-1)[0]?.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
