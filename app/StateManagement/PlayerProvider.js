import React, { createContext, useContext, useState, useEffect } from 'react';
import io from "socket.io-client";


const socket = io("http://localhost:5555", { transports: ["websocket"] });
const PlayerContext = createContext();

// Created a provider component - use this model to create different contexts
export const PlayerProvider = ({ children }) => {
  
  
  const [player, setPlayer] = useState({});

  useEffect(() => {
    if (socket.isConnected) {
      const playerId = socket.id;
      setPlayer((prevState) => ({ ...prevState, id: playerId }));
      console.log(playerId)
    }
  }, []);
  

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
