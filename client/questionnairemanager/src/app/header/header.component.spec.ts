import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { UserApi }  from '../../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from '../../app/shared/sdk/services/core/search.params';
import { InternalStorage } from '../../app/shared/sdk/storage/storage.swaps';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatToolbarModule, HttpModule, RouterTestingModule.withRoutes([])],
      declarations: [ HeaderComponent  ],
      providers: [ AuthService, UserApi, SocketConnection, 
      FlashMessagesService,
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

      it('should create', () => {
        expect(component).toBeTruthy();
       
      });

      it('should have a link to the home page', () => {
        fixture.detectChanges();
        let debugEs = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
        let ind = debugEs.findIndex(de => de.attributes['routerLink'] === './Home');
        expect(ind).toBeGreaterThan(-2);
      });
   
      it('should have a link to the Menu page', () => {
        let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
        let index = debugElements.findIndex(de => de.attributes['routerLink'] === './Questionnaire');
        expect(index).toBeGreaterThan(-2);
      });

  
});
