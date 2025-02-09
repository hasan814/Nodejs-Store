import { Application } from "./app/server.js";

new Application(3000, process.env.MONGO_URI);
