import { fileURLToPath } from "url";

import swaggerJSDoc from "swagger-jsdoc";
import createError from "http-errors";
import allRoutes from "./router/router.js";
import swaggerUI from "swagger-ui-express";
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
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
    this.#app.use(morgan("dev"));
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
    const swaggerOptions = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Node.js Store Project",
          version: "2.0.0",
          description: "API documentation for the Node.js Store Project",
          contact: {
            name: "Hasan Moosavi",
            email: "h.mousavi910@gmail",
          },
        },
        servers: [{ url: "http://localhost:3000" }],
      },
      apis: ["./app/router/**/*.js"],
    };
    const swaggerSpec = swaggerJSDoc(swaggerOptions);
    this.#app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  }
  createServer() {
    http.createServer(this.#app).listen(this.#PORT, () => {
      console.log(`run > http://localhost: ${this.#PORT}`);
    });
  }
  async connectToMongoDB() {
    try {
      await mongoose.connect(this.#MONGO_URI);
      console.log("Connected to DB");
      mongoose.connection.on("connected", () => {
        console.log("Mongoose connected to DB");
      });
      mongoose.connection.on("disconnected", () => {
        console.log("Mongoose connection is disconnected");
      });
      process.on("SIGINT", async () => {
        await mongoose.connection.close();
        console.log("Mongoose connection closed due to app termination");
        process.exit(0);
      });
    } catch (error) {
      console.log(`Failed to Connect DB: ${error}`);
    }
  }
  createRoutes() {
    this.#app.use(allRoutes);
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      next(createError.NotFound("Route not Found"));
    });
    this.#app.use((error, req, res, next) => {
      const serverError = createError.InternalServerError();
      const statusCode = error.status || serverError.status;
      const message = error.message || serverError.message;
      return res.status(statusCode).json({ errors: { statusCode, message } });
    });
  }
}
