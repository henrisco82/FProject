import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { AnalysisComponent } from './analysis.component';

class RouterStub{
  navigate(params){

  }
}

describe('AnalysisComponent', () => {
  let component: AnalysisComponent;
  let fixture: ComponentFixture<AnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ AnalysisComponent ],
      providers: [
        AuthService, UserApi, SocketConnection, QuestionnaireService, QuestionnaireApi, QuestionnaireResponseApi,
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, {provide: Router, useClass: RouterStub},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set questionnaires property with the questionnaires returned from the server', ()=>{
    let service = TestBed.get(QuestionnaireService)
      spyOn(service, 'getQuestionnaires').and.callFake(()=>{
          return Observable.from([[1,2,3]]);
      }); 

      component.ngOnInit();

      expect(component.questionnaires.length).toBeGreaterThan(0);
  }); 


});
