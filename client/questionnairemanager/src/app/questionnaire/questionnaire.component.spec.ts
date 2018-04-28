import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterLinkWithHref } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing'; 
import { QuestionnaireComponent } from './questionnaire.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatGridListModule, RouterTestingModule.withRoutes([]) ],
      declarations: [ QuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to the NewQuestionnaire page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === '../NewQuestionnaire');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to the ViewQuestionnaire page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === '../ViewQuestionnaire');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to the Questionnairetemplate page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === '../Questionnairetemplate');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to the View Response page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === '../View');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to the analysis page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === '../analysis');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to the Sendquestionnaire page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === '../Sendquestionnaire');
    expect(index).toBeGreaterThan(-1);
  });

});
