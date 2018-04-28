import { Component } from '@angular/core';

import { LoopBackConfig } from './shared/sdk/index';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor() {
    LoopBackConfig.setBaseURL('//localhost:3000');
    LoopBackConfig.setApiVersion('api');
  }

}
