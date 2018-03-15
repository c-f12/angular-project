import { MarcasIf } from './master.model';

export interface UserDataIf {
    nombre: string;
    email: string;
    marcas: MarcasIf;
    comentarios: string;
}
