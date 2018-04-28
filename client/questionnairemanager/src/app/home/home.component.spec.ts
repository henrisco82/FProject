import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';
import { QuestionnaireService } from '../questionnaire.service';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { UserApi } from '../../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth.service';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from '../../app/shared/sdk/services/core/search.params';
import { InternalStorage } from '../../app/shared/sdk/storage/storage.swaps';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleMappingApi } from '../../app/shared/sdk/services';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { HomeComponent } from './home.component';


class RouterStub{
  navigate(params){

  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpModule ],
      providers: [ FlashMessagesService, AuthService, UserApi, SocketConnection, QuestionnaireService, QuestionnaireApi, QuestionnaireResponseApi,
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, RoleMappingApi,  {provide: Router, useClass: RouterStub} ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
   
  });

  
});
