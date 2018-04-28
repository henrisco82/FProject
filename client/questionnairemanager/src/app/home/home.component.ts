import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, AccessToken, SDKToken }  from '../../app/shared/sdk/models';
import { UserApi }  from '../../app/shared/sdk/services';

import { RoleMappingApi } from '../../app/shared/sdk/services';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';

import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';

import {AuthService} from './../auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: User = new User();
  username: string;
  password: string;

  firstname: string;
  lastname: string;

  sex: string;
  email: string;
  dateOfBirth: Date;
 

  role: any;

  constructor(
    private userapi: UserApi,
    private loopbackauth: LoopBackAuth,
    private rolemappingapi: RoleMappingApi,
    private router: Router,
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(username, password){
    

      this.rolemappingapi.find().subscribe((data)=>{
          this.role = data
      },(error)=>{
          console.log(error)
      })

     this.userapi.login({username: this.username, password: this.password})
     .subscribe((token: SDKToken) =>{
        this.loopbackauth.setUser(token);
        this.loopbackauth.setToken(token);

        
        
       if(this.role[0].principalId == this.loopbackauth.getCurrentUserId()){
           this.router.navigate(['./Questionnaire']);
           this._flashMessagesService.show('Welcome to the Questionnaire App '+ token.user.username, { cssClass: 'alert-success', timeout: 3000 });
        }else{
          this._flashMessagesService.show('Login Failed! Check your Username and Password and Try Again', { cssClass: 'alert-danger', timeout: 3000 });
        }
        
     }, err =>{
        this._flashMessagesService.show('Login Failed! Check your Username and Password and Try Again', { cssClass: 'alert-danger', timeout: 3000 });
         console.log(err && err.message ? err.message : 'login failed!');
         this.password = '';
     });
 }


 

 private onRegisterSubmit() {
  const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        sex: this.sex,
        email: this.email,
        dateOfBirth: this.dateOfBirth,
        password: this.password
  }

    this.authService.registerUser(user).then((data) => {
            console.log(data);
    }, (error) => {
            console.log(error);
    });
}



}
