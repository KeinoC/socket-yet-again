"use client";
import Image from 'next/image'
import Game from "./Game"
import React, { useState } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<Game />
    </main>
  )
}
