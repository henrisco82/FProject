import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';

@Component({
  selector: 'app-questionnaireresponse',
  templateUrl: './questionnaireresponse.component.html',
  styleUrls: ['./questionnaireresponse.component.scss']
})
export class QuestionnaireresponseComponent implements OnInit {

  id: string;
  response: any;
  items: any;



  constructor(
    private router: ActivatedRoute,
    private questionnaireresponseapi: QuestionnaireResponseApi
  ) { }

  ngOnInit() {

        this.router.params.subscribe(params=>{
          this.id = params.id;
        });

        this.questionnaireresponseapi.findOne({where: {'source.id': this.id}}).subscribe((data)=>{
                this.response = data;
                this.items = this.response.item;
        },(error)=>{
                console.log(error);
        })
  }

}
