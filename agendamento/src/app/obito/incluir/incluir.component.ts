import { AlertService } from './../../services/alert.service';
import { ObitoService } from './../../services/obito.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  public cpf: string;
  public imagem = new Object();
  public isLoadingImage = true;
  public falecido: string;

  public constructor(private service: ObitoService,
    private alertService: AlertService) {

  }


  public ngOnInit() {
    this.imagem = {
      name: "",
    }
  }

  getImagem(readerEvt, midia) {

    return new Promise((resolve, reject) => {
      let file = readerEvt.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        console.log('carregando arquivo');
        midia.binario = btoa(reader.result);
        midia.name = file.name;
        console.log(midia.name);
        console.log('antes de chamar o resolve');
        resolve();
      };
      reader.onerror = function (error) {
        reject(error);
      };
    }).then(() => {
      console.log('final da promisse');
      this.isLoadingImage = false;
    }).catch((e) => {
      console.log('deu problema na imagem');
    });
  }

  // public enviarArquivo() {
  //   console.log(this.cpf);
  //   console.log(this.imagem);

  //   var data = {
  //     cpf: this.cpf,
  //     imagem: this.imagem
  //   };
  //   var result;
  //   result = this.service.adicionar(data)
  //     .subscribe(
  //     data => {
  //       this.alertService.success('Dados alterados com sucesso.');
  //     },
  //     error => {
  //       this.alertService.error('Ocorreu um erro ao realizar as alterações.');
  //     }
  //     );
  //   return false;
  // }

}
