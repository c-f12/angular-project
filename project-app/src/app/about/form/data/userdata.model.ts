import { UserIf, MarcasIf } from './master.model';

export interface UserDataIf {
    user: UserIf;
    marcas: MarcasIf;
    comentarios: string;
}
