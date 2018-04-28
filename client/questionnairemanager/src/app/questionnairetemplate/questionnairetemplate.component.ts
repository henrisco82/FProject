import { Component, OnInit } from '@angular/core';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questionnairetemplate',
  templateUrl: './questionnairetemplate.component.html',
  styleUrls: ['./questionnairetemplate.component.scss']
})
export class QuestionnairetemplateComponent implements OnInit {

    questionnaires: any;



  constructor(
      private questionnaireapi: QuestionnaireApi,
      private router: Router

  ) {


   }

  ngOnInit() {

    this.questionnaireapi.find().subscribe((data)=>{
          this.questionnaires = data;
          console.log(this.questionnaires);
    },(error)=>{
          console.log(error);
    });
  }

  CreateQuestionnaireTemplate(questionnaire){
    let id = questionnaire.id
      console.log(id);
      this.router.navigate(['newtemplate', id]);
  }

}
