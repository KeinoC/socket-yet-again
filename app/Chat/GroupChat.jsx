"use client";

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./GroupChat.css"

const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function GroupChat() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    useEffect(() => {
        socket.on("updateChatMessages", (updatedMessages) => {
            setMessages(updatedMessages);
        });

        return () => {
            socket.off("updateChatMessages");
        };
    }, []);

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            const message = {
                text: inputMessage,
                timestamp: new Date().getTime(),
            };
            socket.emit("chatMessage", message);
            console.log(message);
            setInputMessage("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        handleSendMessage();
    };

    return (
        <div className="chat-container">
            <div className="chat-history-container w-1/4 border-white">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <span className="timestamp">
                            {new Date(message.timestamp).toLocaleTimeString()}
                        </span>
                        <span className="text">{message.text}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}
            className="border-white"
            >
                <div className="input-container">
                    <input
                    className="text-black"
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Enter your message"
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}
