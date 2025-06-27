import { User } from "../../domain/models/User";
import { UserRepository } from "../../application/ports/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
    console.log("Usuario guardado:", user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }
}
