import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import { LoginComponent } from '../../../src/app/components/login/login.component';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';

import { UserApi } from '../../app/shared/sdk/services';

import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';



@Component({
  selector: 'questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage implements OnInit {

     questionnaires: any;
     questionnaire: any;
     thequestionnaireResponse: any;
     questions: any;
     
     options:any ;
    
     type:any = [];
     answer: any[] = [];
     user: any;

     items: Array<any> = [];
     item: {[k: string]: any} = {};

     authored:Date =  new Date();


     option: any;

     choices:Array<any> = [];
     choice: any =  [];
     
    // questionnaire: any = this.questionnaires[]
    
  

  constructor(
      public navCtrl: NavController,
      private userapi: UserApi,
      private questionnaireapi: QuestionnaireApi,
      private questionnaireresponseapi: QuestionnaireResponseApi,
      private loopbackauth: LoopBackAuth
    )
   {

    }

   ngOnInit(){

    console.log(this.answer);

    this.questionnaireresponseapi.findOne({where: {'source.id': this.loopbackauth.getCurrentUserId()}}).subscribe((data)=>{
        this.questionnaire = data;

      

       

        this.questionnaireapi.findById(this.questionnaire.questionnaire.id).subscribe((data)=>{
            this.questionnaires = data;
         
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




updateAnswer(index,ansindex,value,checked){
    if(!Array.isArray(this.answer[index])){
      this.answer[index] = []
    }
    if(checked){
     this.answer[index][ansindex] =  value
    }else{
      this.answer[index].splice(ansindex,1)
    }
    
  }


   submitResponse(){
      

      //  console.log(this.loopbackauth.getCurrentUserId())

   
    
   this.questionnaireresponseapi.findOne({where: {'source.id': this.loopbackauth.getCurrentUserId()}}).subscribe((data)=>{
           this.thequestionnaireResponse = data;
           this.thequestionnaireResponse.status = "completed";
           for (let count=0; count<this.answer.length; ++count ){   
                    this.item.linkedId = count+1;
                    this.item.text = this.questionnaires.item[count].text; 
                    this.item.answer = this.answer[count];
                    this.items.push(this.item);
                    
                    this.item = { };
                 
          }


        console.log(this.items);

      

           this.thequestionnaireResponse.item = this.items;
           this.questionnaireresponseapi.updateAttributes(this.thequestionnaireResponse.id,this.thequestionnaireResponse).subscribe((data)=>{
                console.log(data);
                
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
