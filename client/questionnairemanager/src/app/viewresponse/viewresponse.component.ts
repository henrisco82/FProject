import { Component, OnInit } from '@angular/core';

import { UserApi } from '../../app/shared/sdk/services';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-viewresponse',
  templateUrl: './viewresponse.component.html',
  styleUrls: ['./viewresponse.component.scss']
})
export class ViewresponseComponent implements OnInit {

  users: any

  constructor(
      private router: Router,
      private _authService: AuthService
  ) { }

  ngOnInit() {
          this._authService.getUsers().subscribe((data)=>{
                    this.users = data;
                    console.log(this.users);
            },(error)=>{
                    console.log(error);
            });
          }


          ShowQuestionnaireResponse(user){
                  let id = user.id
                  console.log(id);
                  this.router.navigate(['QuestionnaireResponse', id]);
            }
}
  


 

    
