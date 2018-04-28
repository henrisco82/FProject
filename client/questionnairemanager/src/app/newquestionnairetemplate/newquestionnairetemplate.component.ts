import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { UserApi }  from '../../app/shared/sdk/services';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-newquestionnairetemplate',
  templateUrl: './newquestionnairetemplate.component.html',
  styleUrls: ['./newquestionnairetemplate.component.scss']
})
export class NewquestionnairetemplateComponent implements OnInit {

  id: string;
  questionnaires: any;
  user: any;
  result: any;
  text: any = [];

  date: Date = new Date();

  myForm: FormGroup;
  


 constructor(
   private router: ActivatedRoute,
   private questionnaireapi: QuestionnaireApi,
   private loopbackauth: LoopBackAuth,
   private _fb: FormBuilder,
   private userapi: UserApi,
   private _router: Router,
   private _flashMessagesService: FlashMessagesService
 ) { }

 ngOnInit() {
      this.router.params.subscribe(params=>{
           this.id = params.id;
      });
      
      this.myForm = this._fb.group({
           name: ["", Validators.required],
           description: ["", Validators.required],
           item: this._fb.array([
              
           ])
     });


     console.log(this.myForm);
 

     this.questionnaireapi.findById(this.id).subscribe((data)=>{
             this.questionnaires = data;
            
             this.patchFormData(this.questionnaires)

             this.patchFormArray(this.questionnaires.item);

             this.patchOptionsArray(this.questionnaires.item);         
            
     },(error)=>{
             console.log(error);
     })
 }



     
         initItem(){
           // initialize our item
           return this._fb.group({
               prefix: ["", Validators.required],
               text: ["", Validators.required],
               Questiontype: ["", Validators.required],
               options: this._fb.array([
               ])
           });
       }


       InitOption(){
           return this._fb.group({
               value: [""],
               checked: false
           })
       }

  
       patchOptionsArray(items:any){
         var index = 0
         items.forEach(item => {
           let Optionsctrl = <FormArray>this.myForm.get(['item', index, 'options']);
              items[index].options.forEach(option => {
                   Optionsctrl.push(
                        this._fb.group({
                         value:  [option?option.value:""],
                         checked: false
                        })
                   )
              });
              index = index + 1;
         });
       
       }

      

       patchFormArray(item: any) {
         let ctrl = <FormArray>this.myForm.controls.item;
         item.forEach(items => {
            const fb = this._fb.group({
             prefix:  [items?items.prefix:"", Validators.required],
             text: [items?items.text:"", Validators.required],
             Questiontype: [items?items.Questiontype:"", Validators.required],
             options: this._fb.array([
           
             ])
           })
        
           fb.patchValue(item);
           ctrl.push(fb);
         })
       }

       patchFormData(data: any){
           this.myForm.patchValue({
               name: data.name,
               description: data.description
           })
       }

    

         addItem(): void {
           // add item to the list
           const control = <FormArray>this.myForm.controls['item'];
            control.push(this.initItem());
         }

       


         addOption(index: number): void {
         // add options to the Item
         const control = <FormArray>this.myForm.get(['item', index, 'options'])
         control.push(this.InitOption());
         }


         removeItem(i: number): void {
           // remove item from the to the list
           const control = <FormArray>this.myForm.controls['item'];
           control.removeAt(i);
         }

      

         removeOption(i: number, j: number): void {
           // remove item from the to the list
           const control = <FormArray>this.myForm.get(['item', i, 'options'])
            control.removeAt(j);
         }

       

           onSubmit(){

            this.userapi.findById(this.loopbackauth.getCurrentUserId()).subscribe((data)=>{
                this.user = data;
                var model: any = {
                  name: this.myForm.value.name,
                  title: this.myForm.value.name,
                  description: this.myForm.value.description,
                  status: "active",
                  date: this.date,
                  publisher:  this.user.firstname + " " + this.user.lastname,
                  item: this.myForm.value.item
              }

              this.questionnaireapi.create(model).subscribe((data)=>{
                    this.result = data;
                    this._flashMessagesService.show('The Questionnaire data has been Added Successfully! ', { cssClass: 'alert-success', timeout: 3000 });
                    this._router.navigate(["./ViewQuestionnaire"]);
                    console.log(this.result);
                },(error)=>{
                      console.log(error)
                });
              
            },(error)=>{
                  console.log(error);
            })

          
             

           
           }

}
