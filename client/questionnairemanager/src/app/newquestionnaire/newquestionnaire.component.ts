import { Component, OnInit } from '@angular/core';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserApi }  from '../../app/shared/sdk/services';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { Questionnaire } from './questionnaire.interface';

@Component({
  selector: 'app-newquestionnaire',
  templateUrl: './newquestionnaire.component.html',
  styleUrls: ['./newquestionnaire.component.scss']
})
export class NewQuestionnaireComponent implements OnInit {

  public myForm: FormGroup; // our form model

  date: Date = new Date();
  user: any;
  result: any;



  constructor(
    private questionnaireapi: QuestionnaireApi,
    private loopbackauth: LoopBackAuth,
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private _fb: FormBuilder,
    private userapi: UserApi
  ) { }

  ngOnInit() { 
        this.myForm = this._fb.group({
            name: ["", Validators.required],
            description: ["", Validators.required],
            items: this._fb.array([
                this.initItem(),
            ])
          });

          
        console.log(this.date);
        
  }

  initItem(){
    // initialize our item
    return this._fb.group({
        prefix: ["", Validators.required],
        text: ["", Validators.required],
        Questiontype: ["", Validators.required],
        options: this._fb.array([
            this.InitOption(),
        ])
    });
}


InitOption(){
     return this._fb.group({
         value: [""],
         checked: false
     })
}


   

addItem(): void {
    // add item to the list
    const controlItems = <FormArray>this.myForm.controls['items'];
    controlItems.push(this.initItem());
}


addOption(index: number): void {
  // add options to the Item
  const control = <FormArray>this.myForm.get(['items', index, 'options'])
  control.push(this.InitOption());
}


removeItem(i: number): void {
    // remove item from the to the list
    const control = <FormArray>this.myForm.controls['items'];
    control.removeAt(i);
}

removeOption(i: number, j: number): void {
  // remove item from the to the list
  const control = <FormArray>this.myForm.get(['items', i, 'options'])
   control.removeAt(j);
}



  getItems(form) {
   //console.log(form.controls.items.controls);
    return form.controls.items.controls;
  }
  getOptions(form) {
    //console.log(form.get('options').controls);
    return form.controls.options.controls;

  }


  get items(): FormArray {
    return this.myForm.get("items") as FormArray
  }



    save(): void {

         this.userapi.findById(this.loopbackauth.getCurrentUserId()).subscribe((data)=>{
              this.user = data;
              var model: any = {
                name: this.myForm.value.name,
                title: this.myForm.value.name,
                description: this.myForm.value.description,
                status: "active",
                date: this.date,
                publisher: this.user.firstname + " " + this.user.lastname,
                item: this.myForm.value.items
         }

          
         this.questionnaireapi.create(model).subscribe((data)=>{
                  this.result = data;
                  this.router.navigate(['./ViewQuestionnaire']);
                  this._flashMessagesService.show('New Questionnaire has been added!', { cssClass: 'alert-success', timeout: 1000 });
                  console.log(this.result);
          },(error)=>{
                console.log(error)
          });

         },(error)=>{
               console.log(error);
         })

       
        
           
          
    }
}
