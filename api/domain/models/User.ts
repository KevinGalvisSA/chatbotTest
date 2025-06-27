import {Entity } from "typeorm"

@Entity()

export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) {
    if (!email.includes('@')) {
        throw new Error('Email inválido');
        }
    }
}


