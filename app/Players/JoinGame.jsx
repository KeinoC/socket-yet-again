"user client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function JoinGame() {

    const [playerName, setPlayerName] = useState("");

    const handleAddPlayer = () => {
        const player = {
            id: socket.id,
            name: playerName,
            cards: [],
        };
        socket.emit("addPlayer", player);
    };

    const handleRemovePlayer = () => {
        const playerId = socket.id;
        socket.emit("removePlayer", playerId);
    };

    return (
        <div>
            <input
                className="text-black"
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
            />
            {socket.id ? (
                <button onClick={handleAddPlayer}>Join Game</button>
            ) : (
                <button onClick={handleRemovePlayer}>Leave Game</button>
            )}
        </div>
    );
}
