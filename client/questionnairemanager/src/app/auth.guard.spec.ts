import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
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


class RouterStub{
  navigate(params){

  }
}

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [AuthGuard, AuthService, LoopBackAuth, UserApi, SocketConnection, SocketDriver, SDKModels, InternalStorage, JSONSearchParams, {provide: Router, useClass: RouterStub},]
    });
  });

  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  
});
