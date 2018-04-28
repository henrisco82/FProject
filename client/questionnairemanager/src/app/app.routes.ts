import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewQuestionnaireComponent } from './newquestionnaire/newquestionnaire.component';
import { ViewquestionnaireComponent } from './viewquestionnaire/viewquestionnaire.component';
import { QuestionnairetemplateComponent } from './questionnairetemplate/questionnairetemplate.component';

import {EditquestionnaireComponent } from './editquestionnaire/editquestionnaire.component';

import { ViewresponseComponent } from './viewresponse/viewresponse.component'
import { QuestionnaireresponseComponent } from './questionnaireresponse/questionnaireresponse.component';
import { NewquestionnairetemplateComponent } from './newquestionnairetemplate/newquestionnairetemplate.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SendquestionnaireComponent } from './sendquestionnaire/sendquestionnaire.component';
import { AuthGuard } from './auth.guard';





export const appRoutes: Routes = [
     { path: 'Home', component: HomeComponent },
     { path: 'Questionnaire', component: QuestionnaireComponent, canActivate: [AuthGuard] },
     { path: 'NewQuestionnaire', component: NewQuestionnaireComponent, canActivate: [AuthGuard] },
     { path: 'ViewQuestionnaire', component: ViewquestionnaireComponent, canActivate: [AuthGuard] },
     { path: 'Questionnairetemplate', component: QuestionnairetemplateComponent, canActivate: [AuthGuard] },
     { path: 'Edit/:id', component: EditquestionnaireComponent, canActivate: [AuthGuard] },
     { path: 'View', component: ViewresponseComponent, canActivate: [AuthGuard] },
     { path: 'QuestionnaireResponse/:id', component: QuestionnaireresponseComponent, canActivate: [AuthGuard] },
     { path: 'newtemplate/:id', component: NewquestionnairetemplateComponent, canActivate: [AuthGuard] },
     { path: 'analysis', component: AnalysisComponent, canActivate: [AuthGuard] },
     { path: 'Sendquestionnaire', component: SendquestionnaireComponent, canActivate: [AuthGuard] },
     
    // otherwise redirect to home
    { path: '**', component:HomeComponent  }
];
 
