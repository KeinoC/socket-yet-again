'user client'
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function Game() {
    const [gameState, setGameState] = useState(null);
    const [playerName, setPlayerName] = useState("");

    useEffect(() => {
        socket.on("updateGameState", (updatedGameState) => {
            setGameState(updatedGameState);
        });

        return () => {
            socket.off("updateGameState");
        };
    }, []);

    const handleAddPlayer = () => {
        const player = {
            id: socket.id,
            name: playerName,
            cards: [{ name: "Card 1" }, { name: "Card 2" }],
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
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={handleAddPlayer}>Join Game</button>
            <button onClick={handleRemovePlayer}>Leave Game</button>

            {gameState && (
                <div>
                    <h2>Game State:</h2>
                    <ul>
                        {gameState.players.map((player) => (
                            <li key={player.id}>
                                Player: {player.name}
                                <ul>
                                    {player.cards.map((card, index) => (
                                        <li key={index}>Card: {card.name}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
