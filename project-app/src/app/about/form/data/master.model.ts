export interface MarcasIf {
    id: string;
    marca: string;
}

export class Marcas implements MarcasIf {
    constructor(
        public id: string,
        public marca: string) {}
}