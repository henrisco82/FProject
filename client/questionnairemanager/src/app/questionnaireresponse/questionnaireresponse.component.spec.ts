import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';
import { UserApi } from '../../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from '../../app/shared/sdk/services/core/search.params';
import { InternalStorage } from '../../app/shared/sdk/storage/storage.swaps';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { QuestionnaireresponseComponent } from './questionnaireresponse.component';


class ActivatedRouteStub{
  params: Observable<any> = Observable.empty();
}


describe('QuestionnaireresponseComponent', () => {
  let component: QuestionnaireresponseComponent;
  let fixture: ComponentFixture<QuestionnaireresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ QuestionnaireresponseComponent ],
      providers: [ AuthService, UserApi, SocketConnection, SocketDriver, SDKModels,
         LoopBackAuth, InternalStorage, JSONSearchParams, QuestionnaireResponseApi,
        {provide: ActivatedRoute, useClass: ActivatedRouteStub} 
      
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the response property with questionnaire response returned from the server', () => {
    let service = TestBed.get(QuestionnaireResponseApi)
    spyOn(service, 'findOne').and.callFake(()=>{
        return Observable.from([[1,2,3]]);
    }); 

    component.ngOnInit();

    expect(component.response.length).toBeGreaterThan(0);
});


 
});
