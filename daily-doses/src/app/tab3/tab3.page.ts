import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forecastClima } from '../models/forecastClima';
import { clima } from '../models/clima';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  climaRequest: Observable<any>;
  clima:clima = new clima();
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.climaRequest = this.httpClient.get('https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=93885387');
    this.climaRequest
    .subscribe(data => {
      this.clima = data;
      console.log('my data: ', this.clima);
    })


  }

}
