import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../../../src/app/components/login/login.component';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { UserApi } from '../../app/shared/sdk/services';

import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';



@Component({
  selector: 'questionnaire',
  templateUrl: 'questionnaire.html'
})
export class QuestionnairePage implements OnInit {

     questionnaires: any;
     questionnaire: any;
     thequestionnaireResponse: any;
     questions: any;
     text:any = [];
     options:any ;
    
     type:any = [];
     answers: any;
     user: any;

     items: Array<any> = [];
     item: {[k: string]: any} = {};

     authored:Date =  new Date();

     checkedList : any = [];

     option: any;

     choices:Array<any> = [];
     choice: any =  [];

     ansForm : FormGroup;

     
    // questionnaire: any = this.questionnaires[]
    
  

  constructor(
      public navCtrl: NavController,
      private userapi: UserApi,
      private questionnaireapi: QuestionnaireApi,
      private questionnaireresponseapi: QuestionnaireResponseApi,
      private loopbackauth: LoopBackAuth,
      private _fb: FormBuilder
    )
   {

    }

   ngOnInit(){

    this.ansForm = this._fb.group({
         value: ['', Validators.required],
         checked: false
    });


    this.questionnaireresponseapi.findOne({where: {'source.id': this.loopbackauth.getCurrentUserId()}}).subscribe((data)=>{
        this.questionnaire = data;

       

        this.questionnaireapi.findById(this.questionnaire.questionnaire.id).subscribe((data)=>{
            this.questionnaires = data;
           // this.questionnaires = this.questionnaires.item;

         // console.log(this.FindOptions(this.questionnaires.item)) ;
          

            console.log(this.questionnaires)
        },(error)=>{
            console.log(error);
        })
         },(error)=>{
             console.log(error);
         })

  

 
      
    
      //console.log(this.questions);

      // find user(doctor) and user(patient)


      this.userapi.findById(this.loopbackauth.getCurrentUserId()).subscribe((data)=>{
            this.user = data;
      }, (error)=>{
          console.log(error);
      });

     
     
       
   }



   FindOptions(items:any, event){
    var index = 0
    if(event.target.checked){
        items.forEach(item => {
            this.checkedList = items[index].options.value
            console.log(this.options);
               index = index + 1;
          });
    }   
  } 
    

  onCheckboxChange(items, event) {
    var index = 0
    if(event.target.checked){
        items.forEach(item => {
            this.checkedList.push(items[index].options.value);
            console.log(this.options);
               index = index + 1;
          });
    }   
    console.log(this.checkedList);
}

   clickQuestionSelectBox(questionKey){
        const foundAt = this.choices.indexOf(questionKey);
        if (foundAt >= 0) {
            this.choices.splice(foundAt, 1);
        }  else {
            this.choice.push(questionKey);

        } 
       console.log(this.choice);
       console.log(this.choices);
   }

   submitResponse(text, choices){
      

      //  console.log(this.loopbackauth.getCurrentUserId())

    // this.text.push(this.choice);
    
   this.questionnaireresponseapi.findOne({where: {'source.id': this.loopbackauth.getCurrentUserId()}}).subscribe((data)=>{
           this.thequestionnaireResponse = data;
           this.thequestionnaireResponse.status = "completed";
           for (let count=0; count<this.text.length; ++count ){   
                    this.item.linkedId = count+1;
                    this.item.answer = this.text[count];
                    this.items.push(this.item);
                    this.item = { };
                 
          }

      
          console.log(this.items);

           this.thequestionnaireResponse.item = this.items;
           this.questionnaireresponseapi.updateAttributes(this.thequestionnaireResponse.id,this.thequestionnaireResponse).subscribe((data)=>{
                console.log(data);
                this.answers = data;
                 alert("Your Response has been submitted! Thank you");
                 
            },(error)=>{
                console.log(error);
            })
           console.log(this.thequestionnaireResponse);
               

           
                
        
     },(error)=>{
         console.log(error);
     }); 

     
      
    
       
   }

   onLogoutClick(){
    this.userapi.logout().subscribe((data)=>{
         this.navCtrl.pop();
    },
   (error)=>{
      console.log(error);
   });
}


  
}
