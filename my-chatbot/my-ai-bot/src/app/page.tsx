"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="main-container">
      <h1 className="title">GabyGPT</h1>
      <div className="chatbot">
        {messages.map((message) => (
          <div key={message.id} className={`chatHistory ${message.role === "user" ? "userMessage" : "aiMessage"}`}>
            {/* {message.role === "user" ? "User: " : "AI: "} */}
            {message.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input className="inputField" value={input} placeholder="Ask me anything..." onChange={handleInputChange} />
          <button className="button" type="submit">
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
