import { element } from 'protractor';
import { ObitoService } from './../../services/obito.service';
import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';


@Component({
  selector: 'app-contabilidade',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public results: any[] = [];
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Protocolo', name: 'protocolo' },
    { title: 'CPF', name: 'cpf' },
    { title: 'Nome Completo', name: 'nome' },
    { title: 'Agência', name: 'agencia' },
    { title: 'Data Óbito', name: 'dtObito' },
    { title: 'Descrição', name: 'descricao' },
    { title: 'Arquivo', name: 'arquivo' },
    { title: 'Data de Inclusão', name: 'dtInclusao' },
    { title: 'Usuário', name: 'matricula' },
  ];


  public page: number = 1;
  public itemsPerPage: number = 4;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = TableData;

  public constructor(private _gravamews: ObitoService) {

    this.length = this.data.length;
  }

  public ngOnInit(): void {
    //this.onChangeTable(this.config);

    this.consulta();
    

  }

  private consulta() {
    this.results = [];
    this._gravamews.buscaDocumentos().subscribe(res => {
      res.forEach(element => {
        this.results.push({
        'nome': element.nome
        })

      });
    })

  }





  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
   // console.log(data);
    console.log('depois da consulta:'+this.results);
  }

}
