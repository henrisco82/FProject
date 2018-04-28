import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserApi } from '../../app/shared/sdk/services';
import { ViewresponseComponent } from './viewresponse.component';
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

class RouterStub{
     navigate(params){

     }
}

describe('ViewresponseComponent', () => {
  let component: ViewresponseComponent;
  let fixture: ComponentFixture<ViewresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule  ],
      declarations: [ ViewresponseComponent ],
      providers: [ {provide: Router, useClass: RouterStub}, AuthService, UserApi, SocketConnection, 
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should set the users property with users returned from the server', () => {
        let service = TestBed.get(AuthService)
        spyOn(service, 'getUsers').and.callFake(()=>{
            return Observable.from([[1,2,3]]);
        }); 

        component.ngOnInit();

        expect(component.users.length).toBeGreaterThan(0);
  });

  it('should redirect the user to the questionnaire response page when the show response button is clicked', () => {
        let router = TestBed.get(Router);
        let spy = spyOn(router, 'navigate');

        component.ShowQuestionnaireResponse(1);

        expect(spy).toHaveBeenCalled();
  });


});
