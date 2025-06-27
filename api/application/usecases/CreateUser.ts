import { User } from "../../domain/models/User";
import { UserRepository } from "../ports/UserRepository";
import { randomUUID } from "crypto";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User(randomUUID(), name, email);
    await this.userRepository.save(user);
    return user;
  }
}
