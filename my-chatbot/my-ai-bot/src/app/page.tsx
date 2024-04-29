"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import send from "/public/icons8-send-64.png";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="main-container">
      <h1 className="title">GabyGPT</h1>
      <div className="chatbot">
        {messages.map((message) => (
          <div key={message.id} className={`chatHistory ${message.role === "user" ? "userMessage" : "aiMessage"}`}>
            {/* {message.role === "user" ? "User: " : "AI: "} */}
            <div className="content">{message.content}</div>
          </div>
        ))}

        <form className="form" onSubmit={handleSubmit}>
          <input className="inputField" value={input} placeholder="Ask me anything..." onChange={handleInputChange} />
          <button className="button" type="submit">
            <Image className="send" src={send} alt="send icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
