import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LOCALE_ID } from '@angular/core';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fraseAleatoria } from '../models/fraseAleatoria';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page], 
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class Tab1PageModule {}
