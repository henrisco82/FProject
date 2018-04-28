import { Injectable } from '@angular/core';
import { UserApi } from '../app/shared/sdk/services';
import { User, AccessToken } from '../app/shared/sdk/models';
import { Observable } from 'rxjs/Observable';
import { LoopBackAuth } from './../app/shared/sdk/services/core/auth.service';


@Injectable()
export class AuthService {

  private user: User = new User();

  constructor(
    private userapi: UserApi,
    private loopbackauth: LoopBackAuth
  ) { }

  getUsers(): Observable<any> {
    return this.userapi.find();
 }

logOut(): Observable<any> {
    return this.userapi.logout();
}

registerUser(user): Promise<any> {
    var result: any;

    return new Promise((ressolve, reject) => {
        this.userapi.create(user).subscribe(success => {
            result = success;
            console.log(result);
            alert('registration successful');
        }, error => {
            console.log('create', error);
            alert('Registration Failed' + error.message);
            reject(error);
        });
    });
}

isAuthenticated(): boolean {
    if(this.loopbackauth.getAccessTokenId()){
        return true;
    }else{
        return false;
    }
  }

}
