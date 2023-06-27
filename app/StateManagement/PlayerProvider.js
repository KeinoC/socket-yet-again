import React, { createContext, useContext, useState } from 'react';
import io from "socket.io-client";

const PlayerContext = createContext();

// Created a provider component - use this model to create different contexts
const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({ id: socket.id });
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
