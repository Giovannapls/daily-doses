import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { covid } from '../models/covid';

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
  aday: String = new Date().getDate().toString();
  amonth: String = new Date().getUTCMonth().toString();
  ayear: String = new Date().getFullYear().toString();
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.covidConfirmedRequest = this.httpClient.get('https://api.covid19api.com/total/country/brazil/status/confirmed?from='+this.ayear+'-'+this.amonth+'-'+this.aday+'T00:00:00Z&to='+this.ayear+'-'+this.amonth+'-'+this.aday+'T23:59:59Z')
    this.covidConfirmedRequest
    .subscribe(data => {
      this.covidConfirmed = data[0];
      console.log('my data: ', this.covidConfirmed);
    })
    this.covidRecoveredRequest = this.httpClient.get('https://api.covid19api.com/total/country/brazil/status/recovered?from='+this.ayear+'-'+this.amonth+'-'+this.aday+'T00:00:00Z&to='+this.ayear+'-'+this.amonth+'-'+this.aday+'T23:59:59Z')
    this.covidRecoveredRequest
    .subscribe(data => {
      this.covidRecovered = data[0];
      console.log('my data: ', this.covidRecovered);
    })
    this.covidDeathsRequest = this.httpClient.get('https://api.covid19api.com/total/country/brazil/status/deaths?from='+this.ayear+'-'+this.amonth+'-'+this.aday+'T00:00:00Z&to='+this.ayear+'-'+this.amonth+'-'+this.aday+'T23:59:59Z')
    this.covidDeathsRequest
    .subscribe(data => {
      this.covidDeaths = data[0];
      console.log('my data: ', this.covidDeaths);
    })
  }

}
