import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';

import { LoopBackConfig } from '../shared/sdk/index';
import { User, AccessToken } from '../shared/sdk/models';
import { UserApi } from '../shared/sdk/services';
import { SDKToken } from '../shared/sdk/models';


declare var Object: any;
@Injectable()

//export class AuthService extends LoopBackAuth {

export class AuthService {

    private user: User = new User();
    private sessiontoken: SDKToken = new SDKToken();
    private rememberMe: boolean = true;

    constructor(private userapi: UserApi) {
    }

    /*
       clear(): void{
           super.clear();
           this.clearFromSession();
       } 
    
    
       saveToSession(): void{
           this.rememberMe = false;
           this.persist('id', super.getAccessTokenId());
           this.persist('userId', super.getCurrentUserId);
           this.persist('user', super.getCurrentUserData());
       }
    
       loadFromSession(): void {
           this.sessiontoken.id = sessionStorage.getItem('id');
           this.sessiontoken.userId = sessionStorage.getItem('userId');
           this.sessiontoken.user = sessionStorage.getItem('user');
           if(this.sessiontoken.id && this.sessiontoken.user && this.sessiontoken.userId){
               super.setUser(this.sessiontoken);
           }
       }
    
       clearFromSession(): void{
           Object.keys(this.sessiontoken).forEach(prop => sessionStorage.removeItem(prop));
           this.sessiontoken = new SDKToken();
       }
    
       persist(prop: string, value: any): void {
           if(this.rememberMe){
               super.persist(prop, value);
           }else{
               sessionStorage.setItem(prop, JSON.stringify(value));
           }
       }
    */
    getUsers(): Observable<any> {
        return this.userapi.find();
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



    authenticateUser(user): Promise<any> {
        var result: any;
        return new Promise((ressolve, reject) => {
            this.userapi.login(user).subscribe(success => {
                result = success;
                console.log(result);
                //alert('login successful');
            }, error => {
                console.log('create', error);
                alert('login Failed' + error.message);
                reject(error);
            });
        });
    }



}