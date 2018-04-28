import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApi }  from '../../app/shared/sdk/services';
import {AuthService} from './../auth.service';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
      private router: Router,
      private auth: AuthService,
      private loopbackauth: LoopBackAuth,
      private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
          this.auth.logOut().subscribe((data)=>{  
            this.router.navigate(["./Home"]);
            this._flashMessagesService.show('You are now logged out', { cssClass: 'alert-success', timeout: 1000 });
              
          },
        (error)=>{
            console.log(error);
        });
  }
  

}
