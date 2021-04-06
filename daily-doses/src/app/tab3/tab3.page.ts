import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forecastClima } from '../models/forecastClima';
import { clima } from '../models/clima';
import * as moment from 'moment'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  climaRequest: Observable<any>;
  clima:clima = new clima();
  dateformatedBR = moment().subtract(1,'days').format('DD-MM-YYYY');

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.httpClient.get<clima>('https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=93885387')
    .subscribe(data => {
      this.clima = data;
    })
  }

}
