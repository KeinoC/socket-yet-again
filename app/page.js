"use client";
import Image from "next/image";
import Game from "./Game";
import React, { useState } from "react";
import GlobalStateProvider from "./StateManagement/GlobalStateProvider";

export default function Home() {
    return (
        <GlobalStateProvider>
            <main>
                <Game />
            </main>
        </GlobalStateProvider>
    );
}
