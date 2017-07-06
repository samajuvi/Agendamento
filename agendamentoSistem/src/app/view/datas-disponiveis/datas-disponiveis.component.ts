import { AppConfig } from './../../config/AppConfig';
import { Component, OnInit } from '@angular/core';
import { DatasController } from '../../controllers/DatasController';
import { Http, Headers } from "@angular/http";
@Component({
  selector: 'app-datas-disponiveis',
  templateUrl: './datas-disponiveis.component.html',
  styleUrls: ['./datas-disponiveis.component.css'],
  providers:[DatasController]
})
export class DatasDisponiveisComponent implements OnInit {


 resultadoResumoDisponiveis : any = [];

   constructor(private http: Http, private controller: DatasController) { }

  ngOnInit() {
    this.getDatasDisponiveis();
  }


 getDatasDisponiveis(){
    console.log("antes da função dados");
    this.controller.getDatasDisponiveis().subscribe(res => {
    this.resultadoResumoDisponiveis = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoResumoDisponiveis));
  });
    }






}
