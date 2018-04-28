import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


import { UserApi } from '../../app/shared/sdk/services';
import { Questionnaire } from '../../app/shared/sdk/models';
import { User } from '../../app/shared/sdk/models';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { UserModelApi } from '../../app/shared/sdk/services';

@Component({
  selector: 'app-sendquestionnaire',
  templateUrl: './sendquestionnaire.component.html',
  styleUrls: ['./sendquestionnaire.component.scss']
})
export class SendquestionnaireComponent implements OnInit {
  patients: any;
  questionnaires: any;
  thequestionnaire: any;
  source: any;
  author: any;
  authored: Date = new Date();


  qresponse: any;

  thepatient: any;
  thequestion: any;
  constructor(
  
    private userapi: UserApi,
    private usermodelapi: UserModelApi,
    private questionnaireapi: QuestionnaireApi,
    private questionnaireresponseapi: QuestionnaireResponseApi,
    private loopbackauth: LoopBackAuth,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {

          this.userapi.find().subscribe((data) => {
              this.patients = data;
              // console.log(this.patients);
          }, (error) => {
              console.log(error);
          })

          this.questionnaireapi.find().subscribe((data) => {
              this.questionnaires = data;
              // console.log(this.questionnaires);
          }, (error) => {
              console.log(error);
          })
  }

  send() {
    // find the patient using his id 
    var message: string;
    this.userapi.findById(this.thepatient).subscribe((data) => {
        this.source = data;
        console.log(this.source);
        // find the questionnaire using the questionnaire id
        this.questionnaireapi.findById(this.thequestion).subscribe((data) => {
            this.thequestionnaire = data;
            //this.thequestionnaire = Object(this.thequestionnaire)
            console.log(this.thequestionnaire );
            // find the user using the user id
            this.userapi.findById(this.loopbackauth.getCurrentUserId()).subscribe((data) => {
                this.author = data;
                console.log(this.author);
                // send the data to the questionnaire response model
                this.questionnaireresponseapi.create({
                    identifier: "string",
                    questionnaire: this.thequestionnaire,
                    status: "todo",
                    author: this.author,
                    source: this.source,
                    authored: this.authored.getDate(),
                    item: {}
                }).subscribe((data) => {
                    this.qresponse = data;
                    message = "Dear " +this.source.lastname+ ",<br/> Please login to the questionnaire app and fill the questionnaire";
                    this.usermodelapi.sendEmail(this.thequestionnaire.title, message , this.source.email).subscribe((data)=>{
                         console.log(data);
                    },(error)=>{
                         console.log(error);
                    })
                    this._flashMessagesService.show('The Questionnaire has been sent!', { cssClass: 'alert-success', timeout: 3000 });
                    console.log(this.qresponse);
                }, (error) => {
                    console.log(error)
                });
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });
    }, (error) => {
        console.log(error);
  });


}


}
