import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionnaireResponseApi } from '../../app/shared/sdk/services';
import { QuestionnaireService } from '../questionnaire.service';
import { QuestionnaireApi } from '../../app/shared/sdk/services';
import { UserApi } from '../../app/shared/sdk/services';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth.service';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';
import { JSONSearchParams } from '../../app/shared/sdk/services/core/search.params';
import { InternalStorage } from '../../app/shared/sdk/storage/storage.swaps';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import { EditquestionnaireComponent } from './editquestionnaire.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

class RouterStub{
  navigate(params){

  }
}

class ActivatedRouteStub{
      params: Observable<any> = Observable.empty();
}



describe('EditquestionnaireComponent', () => {
  let component: EditquestionnaireComponent;
  let fixture: ComponentFixture<EditquestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ EditquestionnaireComponent ],
      providers: [ FormBuilder, FlashMessagesService, AuthService, UserApi, SocketConnection, QuestionnaireService, QuestionnaireApi, QuestionnaireResponseApi,
        SocketDriver, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}, ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditquestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  
  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    component.ngOnInit();
    expect(component.myForm instanceof FormGroup).toBe(true);
});

  it('should create some form components', ()=>{
       expect(component.myForm.contains('name')).toBeTruthy();
       expect(component.myForm.contains('description')).toBeTruthy();
       expect(component.myForm.contains('item')).toBeTruthy();       

  }); 

});
