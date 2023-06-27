"user client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5555", { transports: ["websocket"] });

export default function GameplayArea() {


    return (
        <div className="flex w-3/4 relative">Gameplay Area</div>
    )
}