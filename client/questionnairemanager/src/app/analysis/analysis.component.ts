import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import 'rxjs/add/operator/map';

import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { QuestionnaireService } from '../questionnaire.service';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

 qresponse: any; 
 questionnaires: any;
 selectedquestionnaires: any;
 answer: any;
 chart: any;
 source: any = [];
 ctx: any;


 thequestion: any;
 thequestionnaire: any;
 chartType: any;
 chartdata: any = [];




  constructor(
    private _response: QuestionnaireResponseApi,
    private _questionnaireService: QuestionnaireService,
    private questionnaireapi: QuestionnaireApi
  ) { }

  ngOnInit() {

     this._questionnaireService.getQuestionnaires().subscribe((data) => {
          this.questionnaires = data;
      }, (error) => {
          console.log(error);
      })
       
  }

  getAnswer(items:any){
    var index = 0
    items.forEach(item => {
 
         items[index].options.forEach(option => {
             this.answer = option;
             console.log(this.answer);
              
         });
         index = index + 1;
    });
  
  }

  selectchange(event){
      var id = event.target.value;
      this.questionnaireapi.findById(id).subscribe((data) => {
        this.selectedquestionnaires = data;
        this.selectedquestionnaires = this.selectedquestionnaires.item;
        console.log(this.selectedquestionnaires);
        }, (error) => {
            console.log(error);
        })
  }

  

  onSubmit(thequestion, thequestionnaire, chartType){
       console.log(this.thequestion);
       console.log(this.thequestionnaire);


            this._response.find().subscribe((res)=>{
                this.qresponse = res;
                 var index = 0;
                 this.qresponse.forEach(response => {
                    this.qresponse[index].item.forEach(element => {
                          console.log(this.qresponse[index].item);
                          if(element.text === this.thequestion){
                               this.chartdata.push(element.answer);
                              
                              
                               this.source.push(response.source.firstname+" "+response.source.lastname);
                              
                          }
                    });
                   index = index + 1;
                 });

                 this.chartdata =  this.chartdata.map(v => +v);
                 console.log(this.chartdata);
                 console.log(this.source);
                 this.chart =  new Chart('myChart', {
                  type: this.chartType,
                  data: {
                      labels: this.source,
                      datasets: [{
                          label: this.thequestion,
                          data: this.chartdata,
                          backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                   
                          ],
                          borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                              
                          ],
                          borderWidth: 1
                      }]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                              ticks: {
                                  beginAtZero:true
                              }
                          }]
                      }
                  }
              });

              this.source = [];
              this.chartdata = [];
      
            },(error)=>{
                  console.log(error);
            })
            

           
          
         
        
          



            
           
            
             
       
  }
  
 
}
