"user client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";


export default function Seats() {

    return (
        <div>
    <h2>Seats</h2>
    <JoinGame />
        </div>
    )
}