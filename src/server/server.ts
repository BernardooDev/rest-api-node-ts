import express from "express";
import { router } from "./routes/routes";

const server = express()

server.use("/", router)

export { server };

