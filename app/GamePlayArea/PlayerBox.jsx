import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./GameplayArea.css";

const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function PlayerBox() {

    return (
        <div className="player-box">Player Area</div>
    )
}