"use client";
import React from "react";
import { PlayerProvider } from "./PlayerProvider";
import { GameProvider } from "./GameProvider";

export const GlobalStateProvider = ({ children }) => {
    return (
        <GameProvider>
            <PlayerProvider>{children}</PlayerProvider>
        </GameProvider>
    );
};
