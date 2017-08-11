import { Modulo } from "app/model/modulo";

export class Plataforma {
    nome: string;
    _id : string;
    modulos : Array<Modulo> = new Array(); 
}