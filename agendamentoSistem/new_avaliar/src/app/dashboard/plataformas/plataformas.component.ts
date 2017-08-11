import { Plataforma } from "app/model/plataforma";
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { PlataformaService } from "app/services/plataforma.service";

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  plataformas = new Array();
  
  constructor(private service:PlataformaService, private router: Router) { }

  ngOnInit() {
    this.service.listar()
      .subscribe(res => {
        console.log(res);
        this.plataformas = res
      });
  }

  selecionarPlataforma(plataforma) {
    console.log(plataforma);
    this.service.setPlataformaSelecionada(plataforma);
    this.router.navigate(['dashboard/plataforma']);
  }

}
