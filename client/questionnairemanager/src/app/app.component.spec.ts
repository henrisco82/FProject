/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserApi }  from './../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from './../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from './../app/shared/sdk/services/core/search.params';
import { InternalStorage } from './../app/shared/sdk/storage/storage.swaps';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MatToolbarModule } from '@angular/material/toolbar';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]), FlashMessagesModule, MatToolbarModule, HttpModule ],
      declarations: [ AppComponent, HeaderComponent, FooterComponent ],
      providers: [ AuthService, UserApi, SocketConnection, FlashMessagesService,
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams ]
      

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should have a router outlet', ()=>{
     let de = fixture.debugElement.query(By.directive(RouterOutlet));
     expect(de).not.toBeNull();
  });

 
});
