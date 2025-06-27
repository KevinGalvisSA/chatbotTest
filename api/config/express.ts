import express from "express";
import bodyParser from "body-parser";
import { InMemoryUserRepository } from "../infrastructure/persistence/InMemoryUserRepository";
import { UserController } from "../interfaces/controllers/UserController";
import cors from 'cors';

export function createApp() {
  const app = express();
  app.use(express.json())
  app.use(cors());
  app.use(bodyParser.json());

  const userRepository = new InMemoryUserRepository();
  app.use("/api", UserController(userRepository));

  return app;
}
