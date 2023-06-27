import React, { createContext, useContext, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5555", { transports: ["websocket"] });
export const GameContext = createContext();

// Created a provider component - use this model to create different contexts
export const GameProvider = ({ children }) => {

    const [seats, setSeats] = useState(1);
    console.log(seats)

    return (
        <GameContext.Provider value={{ seats, setSeats }}>
            {children}
        </GameContext.Provider>
    );
};
