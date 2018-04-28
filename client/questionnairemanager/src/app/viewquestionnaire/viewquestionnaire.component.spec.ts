import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { QuestionnaireService } from '../questionnaire.service';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { ViewquestionnaireComponent } from './viewquestionnaire.component';
import { UserApi } from '../../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth.service';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from '../../app/shared/sdk/services/core/search.params';
import { InternalStorage } from '../../app/shared/sdk/storage/storage.swaps';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

class RouterStub{
    navigate(params){

    }
}

describe('ViewquestionnaireComponent', () => {
  let component: ViewquestionnaireComponent;
  let fixture: ComponentFixture<ViewquestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule  ],
      declarations: [ ViewquestionnaireComponent ],
      providers: [ AuthService, UserApi, SocketConnection, QuestionnaireService, QuestionnaireApi,
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, {provide: Router, useClass: RouterStub}, ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
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

  it('should call the server to delete questionnaire if the user confirms', ()=>{
       let service = TestBed.get(QuestionnaireService);
      spyOn(window, 'confirm').and.returnValue(true);
     let spy = spyOn(service, 'deleteQuestionnaire').and.returnValue(Observable.empty());

      component.deleteQuestionnaire(1);

      expect(spy).toHaveBeenCalled();


  });


  it('should NOT call the server to delete questionnaire if the user cancels', ()=>{
    let service = TestBed.get(QuestionnaireService);
    spyOn(window, 'confirm').and.returnValue(false);
   let spy = spyOn(service, 'deleteQuestionnaire').and.returnValue(Observable.empty());

    component.deleteQuestionnaire(1);

    expect(spy).not.toHaveBeenCalled();


});

it('should redirect the user to the Edit questionnaire page when the edit button is clicked', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.editQuestionnaire(1)

    expect(spy).toHaveBeenCalled();
});




});
