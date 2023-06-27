"user client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import GroupChat from "./Chat/GroupChat";
import JoinGame from "./Players/JoinGame";
import GameplayArea from "./GamePlayArea/GamePlayArea";
import "./Game.css";

const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function Game() {
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        socket.on("updateGameState", (updatedGameState) => {
            setGameState(updatedGameState);
        });

        return () => {
            socket.off("updateGameState");
        };
    }, []);

    return (
        <div className="game-page">
            <div className="top-bar">
                <JoinGame />
            </div>

            <div className="game-container">
            <div className="left-bar">Left Bar</div>
            <div className="game-area"><GameplayArea /> </div>

            <div className="right-bar">
                <GroupChat />
            </div>
            </div>
        </div>
    );
}
