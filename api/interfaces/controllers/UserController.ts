import express, { Request, Response, Router } from "express";
import { CreateUser } from "../../application/usecases/CreateUser";
import { UserRepository } from "../../application/ports/UserRepository";

export function UserController(userRepository: UserRepository): Router {
  const router = express.Router();
  const createUser = new CreateUser(userRepository);

  router.post("/users", async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
      const user = await createUser.execute(name, email);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  return router;
}
