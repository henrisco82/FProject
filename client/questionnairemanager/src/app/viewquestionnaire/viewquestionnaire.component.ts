import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../../app/shared/sdk/models';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { QuestionnaireService } from '../questionnaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewquestionnaire',
  templateUrl: './viewquestionnaire.component.html',
  styleUrls: ['./viewquestionnaire.component.scss']
})
export class ViewquestionnaireComponent implements OnInit {

      questionnaires: any;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private router: Router,
  ) { }

  ngOnInit() {

      // this.questionnaireapi.find().subscribe((data)=>{
      //       this.questionnaires = data;
      //       console.log(this.questionnaires);          
      // },(error)=>{
      //        console.log(error);
      // });

      this._questionnaireService.getQuestionnaires().subscribe((data)=>{
              this.questionnaires = data;
              console.log(this.questionnaires);  
      },(error)=>{
               console.log(error);
      })


  }

  editQuestionnaire(questionnaire){
    let id = questionnaire.id
      console.log(id);
      this.router.navigate(['Edit', id]);
  }


  deleteQuestionnaire(questionnaire){

    if (confirm('Are you sure you want to delete this Questionnaire?')) {
      // TODO:  Do something here if the answer is "Ok".
          let id = questionnaire.id
          this._questionnaireService.deleteQuestionnaire(id).subscribe((data)=>{
                console.log(data);
                console.log("Questionnaire has been deleted");
                
                this._questionnaireService.getQuestionnaires().subscribe((data)=>{
                     this.questionnaires = data;
                     console.log(this.questionnaires);          
            },(error)=>{
                   console.log(error);
            });
          },(error)=>{
              console.log(error);
          })
    }
   
     
  }

}
