import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';
import { UserApi } from '../../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from '../../app/shared/sdk/services/core/search.params';
import { InternalStorage } from '../../app/shared/sdk/storage/storage.swaps';
import { UserModelApi } from '../../app/shared/sdk/services';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { SendquestionnaireComponent } from './sendquestionnaire.component';

class RouterStub{
     navigate(params){

     }
}

describe('SendquestionnaireComponent', () => {
  let component: SendquestionnaireComponent;
  let fixture: ComponentFixture<SendquestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ SendquestionnaireComponent ],
      providers: [ 
        {provide: Router, useClass: RouterStub}, AuthService, UserApi, QuestionnaireApi, UserModelApi, SocketConnection, 
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, QuestionnaireResponseApi, FlashMessagesService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendquestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
