import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
  feriados: Observable<any>;
  frase: Observable<any>;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) { 
    this.frase = this.httpClient.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    this.feriados = this.httpClient.get('https://calendarific.com/api/v2/holidays?&api_key=80e93351ad0cb3981ddbd6dab3ffea654ddc7f1c&country=BR&year=2021&month=4');

    
    this.feriados
    .subscribe(data => {
      console.log('my data: ', data.response.holidays);
    })

    this.frase
    .subscribe(data => {
      console.log('my data: ', data.quotes[0]);
    })
  }
}
