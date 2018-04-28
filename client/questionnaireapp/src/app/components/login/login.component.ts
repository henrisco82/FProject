import { Component } from '@angular/core';
// import { Router } from '@angular/router';

import { NavController } from 'ionic-angular';

import { RegisterPage} from '../../../pages/register/register';
import { SendQuestionnairePage } from '../../../pages/sendquestionnaire/sendquestionnaire';
import { QuestionsPage } from '../../../pages/questions/questions';

import { TabsPage } from '../../../pages/tabs/tabs';

import { LoopBackConfig } from '../../shared/sdk/index';
import { User, AccessToken, SDKToken }  from '../../shared/sdk/models';
import { UserApi }  from '../../shared/sdk/services';

import { RoleMappingApi } from '../../shared/sdk/services';

 import { AuthService } from '../../services/auth.service';

 import { LoopBackAuth } from '../../shared/sdk/services/core/auth.service';


@Component({
  templateUrl: 'login.html',
  selector: 'login'
})
export class LoginComponent {
  rootPage:any = TabsPage;
  private user: User = new User();
  username: string;
  password: string;
  role: any;

  constructor(
      public navCtrl: NavController, 
      private authService: AuthService,
      private userapi: UserApi,
      private loopbackauth: LoopBackAuth,

      private rolemappingapi: RoleMappingApi
    ) { }
  
  onLoginSubmit(){
      
     const user = {
         username: this.username,
         password: this.password
     }

    console.log(user);
    
     /*this.authService.registerUser(user).then((data) => {
        console.log(data);
     }, (error) => {
         console.log(error);
     });*/
     this.authService.authenticateUser(user).then((data) => { 
       //  this.navCtrl.push(SendQuestionnairePage);
       this.navCtrl.push(QuestionsPage);
     }).catch((error) => {
        console.log(error);
     });
    
  
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
            this.navCtrl.push(SendQuestionnairePage);
         }else{
             this.navCtrl.push(QuestionsPage);
         }
         
      }, err =>{
          alert(err && err.message ? err.message : 'login failed!');
          this.password = '';
      });
  }

  

  register(){
     this.navCtrl.push(RegisterPage);
  }

  RememberMe(){
       this.loopbackauth.setRememberMe(true); 
  }
 



  
}
