import { fileURLToPath } from "url";
import { connect } from "mongoose";

import allRoutes from "./router/router.js";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import http from "http";

dotenv.config();

export class Application {
  #app = express();
  #MONGO_URI;
  #PORT;
  constructor(PORT, MONGO_URI) {
    this.#PORT = PORT;
    this.#MONGO_URI = MONGO_URI;
    this.configApplication();
    this.connectToMongoDB();
    this.createServer();
    this.createRoutes();
    this.errorHandler();
  }
  async configApplication() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }
  createServer() {
    http.createServer(this.#app).listen(this.#PORT, () => {
      console.log(`run > http://localhost: ${this.#PORT}`);
    });
  }
  async connectToMongoDB() {
    try {
      await connect(this.#MONGO_URI);
      console.log("Connected to DB");
    } catch (error) {
      console.log(`Failed to Connect DB: ${error}`);
    }
  }
  createRoutes() {
    this.#app.use(allRoutes);
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      return res
        .status(404)
        .json({ statusCode: 404, message: "Route not Found" });
    });
    this.#app.use((error, req, res, next) => {
      const statusCode = error.status || 500;
      const message = error.message || "InternalServerError";
      return res.status(statusCode).json({ statusCode, message });
    });
  }
}
