"user client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import OpponentBox from "./OpponentBox";
import PlayerBox from "./PlayerBox";
import "./GameplayArea.css";
// import "./Game.css";

const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function GameplayArea() {
    return (
        <div className="game-area">
            <PlayerBox />
            <h1>Game</h1>
            <OpponentBox />
        </div>
    );
}
