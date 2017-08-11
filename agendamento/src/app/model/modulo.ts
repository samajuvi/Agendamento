import { Funcionalidade } from "app/model/funcionalidade";

export class Modulo {
    nome: string = "";
    rota:string;
    funcionalidades : Array<Funcionalidade> = new Array(); 
}