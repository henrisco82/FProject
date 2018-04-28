import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuestionnaireApi } from '../app/shared/sdk/services';

@Injectable()
export class QuestionnaireService {

  constructor(
      private questionnaireapi: QuestionnaireApi
  ) { }


  getQuestionnaires(): Observable<any> {
    return this.questionnaireapi.find();
  }

  deleteQuestionnaire(id: any): Observable<any> {
      return this.questionnaireapi.deleteById(id);
  }

}
