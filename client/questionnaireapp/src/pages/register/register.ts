import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoopBackConfig } from 'C:/Users/Henrisco82/Documents/Thesis/FProject/client/questionnaireapp/src/app/shared/sdk/index';
import { User, AccessToken }  from 'C:/Users/Henrisco82/Documents/Thesis/FProject/client/questionnaireapp/src/app/shared/sdk/models';

import {AuthService} from 'C:/Users/Henrisco82/Documents/Thesis/FProject/client/questionnaireapp/src/app/services/auth.service';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  private user: User = new User();
  firstname: string;
  lastname: string;
  username: string;
  sex: string;
  email: string;
  dateOfBirth: Date;
  password: string

  constructor(public navCtrl: NavController, private authService: AuthService) {
     
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
