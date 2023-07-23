import express from "express";
import { router } from "./routes/routes";
import "dotenv/config"

const server = express()

server.use(express.json())

server.use("/user", router)

export { server };

