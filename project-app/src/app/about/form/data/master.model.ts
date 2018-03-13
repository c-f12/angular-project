export interface UserIf {
    nombre: string;
    email: string;
}

export class User implements UserIf {
    constructor(
        public nombre: string,
        public email: string) {}
}

export interface MarcasIf {
    id: string;
    marca: string;
}
