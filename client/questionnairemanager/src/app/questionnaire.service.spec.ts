import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireApi } from '../app/shared/sdk/services';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;
  beforeEach(() => {
     service = new QuestionnaireService(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 

});
