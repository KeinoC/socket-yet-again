"user client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import JoinGame from "../Players/JoinGame";
import "./TopBar.css"

const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function () {
    return (
        <div className="top-bar-container">
            <span className='glowing-txt'>U<span className='faulty-letter'>N</span>STA<span className='faulty-letter'>B</span>LE DEVELOPER</span>
        </div>
    );
}
