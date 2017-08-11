import { Component, OnInit } from '@angular/core';
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'app-alerttag',
  templateUrl: './alerttag.component.html',
  styleUrls: ['./alerttag.component.css']
})
export class AlerttagComponent implements OnInit {

  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    console.log('inicianado tag');
    this.alertService.getMessage().subscribe(message => { console.log('retorno'); this.message = message; });
  }

}
