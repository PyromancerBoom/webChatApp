'use strict'

import { createServer } from "http"

import express from "express";
import cors from "cors"
import { Server } from "socket.io";

// import { getStdCodeByCountryCode } from "./util.js"

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    serveClient: false,
})

app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }))

io.on("connection", socket => {
    console.log(socket);
})

httpServer.listen(800);