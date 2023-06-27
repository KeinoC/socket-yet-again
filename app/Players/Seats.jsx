"user client";
import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { GameContext } from "../StateManagement/GameProvider";
import  JoinGame  from "./JoinGame"

export default function Seats() {
    const { seats, setSeats } = useContext(GameContext);

    const renderSeats = [];

    for (let i = 0; i < seats; i++) {
        renderSeats.push(
            <div key={i} className="seat-wrapper">
                <h3>Seat {i + 1}</h3>
                <JoinGame />
            </div>
        );
    }

    return <div className="seat-container">{renderSeats}</div>;
}
