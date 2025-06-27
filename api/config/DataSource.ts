// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../domain/models/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',           // Tu usuario de PostgreSQL
  password: 'testeando',      // Tu contraseña
  database: 'mypostbase',    // Nombre de tu base de datos
  entities: [User],
  synchronize: true,               // ⚠️ Solo para desarrollo
  logging: true,
});
