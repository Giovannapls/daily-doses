import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { feriadoModel } from '../models/feriadoModel';
import { fraseAleatoria } from '../models/fraseAleatoria';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  feriadosRequest: Observable<any>;
  fraseRequest: Observable<any>;
  frase:fraseAleatoria = new fraseAleatoria();
  listaFeriados: Array<feriadoModel> = new Array<feriadoModel>();
  constructor(public navCtrl: NavController, public httpClient: HttpClient) { 
    this.frase.text ="teste";
    this.fraseRequest = this.httpClient.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    this.feriadosRequest = this.httpClient.get('https://calendarific.com/api/v2/holidays?&api_key=80e93351ad0cb3981ddbd6dab3ffea654ddc7f1c&country=BR&year=2021&month=4');

    
    this.feriadosRequest
    .subscribe(data => {
      this.listaFeriados = data.response.holidays;
      console.log('my data: ', this.listaFeriados);
    })

    this.fraseRequest
    .subscribe(data => {
      this.frase = data.quotes[0];
      console.log('my data: ', data.quotes[0]);
    })
  }
}
