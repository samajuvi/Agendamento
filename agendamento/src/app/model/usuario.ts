import { Plataforma } from "app/model/plataforma";

export class Usuario {
    nome: string;
    email: string;
    cpf: string;
    password: string;
    plataformas : Array<Plataforma> = new Array();
}