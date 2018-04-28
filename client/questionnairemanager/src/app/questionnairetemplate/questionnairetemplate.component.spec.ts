import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
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
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { QuestionnairetemplateComponent } from './questionnairetemplate.component';

class RouterStub{
  navigate(params){

  }
}

describe('QuestionnairetemplateComponent', () => {
  let component: QuestionnairetemplateComponent;
  let fixture: ComponentFixture<QuestionnairetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ QuestionnairetemplateComponent ],
      providers: [ {provide: Router, useClass: RouterStub}, AuthService, QuestionnaireApi, SocketConnection, 
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should redirect the user to the newtemplate page when the use button is clicked', () => {
      let router = TestBed.get(Router);
      let spy = spyOn(router, 'navigate');

      component.CreateQuestionnaireTemplate(1);

      expect(spy).toHaveBeenCalled();
   });

});
