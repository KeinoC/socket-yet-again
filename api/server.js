const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000, http://localhost:3001, http://localhost:3002",
        methods: ["GET", "POST", "OPTIONS"],
    },
});

let gameState = {
    players: [],
    chatMessages: [],
};

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("addPlayer", (player) => {
        gameState.players.push(player);
        io.emit("updateGameState", gameState);
    });

    socket.on("removePlayer", (playerId) => {
        gameState.players = gameState.players.filter(
            (player) => player.id !== playerId
        );
        io.emit("updateGameState", gameState);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        const playerId = socket.id;
        gameState.players = gameState.players.filter(
            (player) => player.id !== playerId
        );
        io.emit("updateGameState", gameState);
    });

    socket.on("chatMessage", (message) => {
        gameState.chatMessages.push(message);
        console.log("message hit server");
        io.emit("updateChatMessages", gameState.chatMessages);
    });
});

httpServer.listen(5555, () => {
    console.log("Server is running on http://localhost:5555");
});
