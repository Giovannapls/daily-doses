import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { covid } from '../models/covid';
import * as moment from 'moment'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  covidConfirmedRequest: Observable<any>;
  covidRecoveredRequest: Observable<any>;
  covidDeathsRequest: Observable<any>;
  covidConfirmed:covid = new covid();
  covidRecovered:covid = new covid();
  covidDeaths:covid = new covid();
  dateformated = moment().subtract(1,'days').format('YYYY-MM-DD');
  dateformatedBR = moment().subtract(1,'days').format('DD-MM-YYYY');
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.covidConfirmedRequest = this.httpClient.get('https://api.covid19api.com/total/country/brazil/status/confirmed?from='+this.dateformated+'T00:00:00Z&to='+this.dateformated+'T23:59:59Z')
    this.covidConfirmedRequest
    .subscribe(data => {
      this.covidConfirmed = data[0];
    })
    this.covidRecoveredRequest = this.httpClient.get('https://api.covid19api.com/total/country/brazil/status/recovered?from='+this.dateformated+'T00:00:00Z&to='+this.dateformated+'T23:59:59Z')
    this.covidRecoveredRequest
    .subscribe(data => {
      this.covidRecovered = data[0];
    })
    this.covidDeathsRequest = this.httpClient.get('https://api.covid19api.com/total/country/brazil/status/deaths?from='+this.dateformated+'T00:00:00Z&to='+this.dateformated+'T23:59:59Z')
    this.covidDeathsRequest
    .subscribe(data => {
      this.covidDeaths = data[0];
    })
  }

  

}
