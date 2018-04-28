import { TestBed, inject } from '@angular/core/testing';
import { LoopBackAuth } from './../app/shared/sdk/services/core/auth.service';
import { UserApi } from '../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { JSONSearchParams } from './../app/shared/sdk/services/core/search.params';
import { InternalStorage } from './../app/shared/sdk/storage/storage.swaps';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';


describe('AuthService', () => {
  let authService: AuthService;
  let userServiceSpy: jasmine.SpyObj<UserApi>;


  beforeEach(() => {
    
    const spy = jasmine.createSpyObj('UserApi', ['find']);

    

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [AuthService, LoopBackAuth, UserApi, SocketConnection, SocketDriver, SDKModels, InternalStorage, JSONSearchParams,
        { provide: UserApi, useValue: spy }
       ]
    });

    authService = TestBed.get(AuthService);
    userServiceSpy = TestBed.get(UserApi);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('#getUsers should return stubbed value from a spy', () => {
    const stubValue: Observable<any> = Observable.empty();
    userServiceSpy.find.and.returnValue(stubValue);
  
    expect(authService.getUsers())
      .toBe(stubValue, 'service returned stub value');
    expect(userServiceSpy.find.calls.count())
      .toBe(1, 'spy method was called once');
    expect(userServiceSpy.find.calls.mostRecent().returnValue)
      .toBe(stubValue);

  });



  



 
  
});
