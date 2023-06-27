"use client";
import Image from "next/image";
import Game from "./Game";
import React, { useState } from "react";
import {GlobalStateProvider} from "./StateManagement/GlobalStateProvider";

export default function Home() {
    return (
            <main>
        <GlobalStateProvider>
                <Game />
        </GlobalStateProvider>
            </main>
    );
}
