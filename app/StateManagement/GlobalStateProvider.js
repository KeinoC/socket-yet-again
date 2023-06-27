"use client";
import React from "react";
import PlayerProvider from "./PlayerProvider";

export const AppProvider = ({ children }) => {
    return <PlayerProvider>{children}</PlayerProvider>;
};
