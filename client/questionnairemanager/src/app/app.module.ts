import { BrowserModule } from '@angular/platform-browser';
import { SDKBrowserModule } from './shared/sdk/index';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';

import { NgDragDropModule } from 'ng-drag-drop';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewQuestionnaireComponent } from './newquestionnaire/newquestionnaire.component';
import { ViewquestionnaireComponent } from './viewquestionnaire/viewquestionnaire.component';

import { appRoutes } from './app.routes';
import { QuestionnairetemplateComponent } from './questionnairetemplate/questionnairetemplate.component';
import { EditquestionnaireComponent } from './editquestionnaire/editquestionnaire.component';
import { ViewresponseComponent } from './viewresponse/viewresponse.component';
import { QuestionnaireresponseComponent } from './questionnaireresponse/questionnaireresponse.component';
import { NewquestionnairetemplateComponent } from './newquestionnairetemplate/newquestionnairetemplate.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SendquestionnaireComponent } from './sendquestionnaire/sendquestionnaire.component';
import { QuestionnaireService } from './questionnaire.service';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuestionnaireComponent,
    NewQuestionnaireComponent,
    ViewquestionnaireComponent,
    QuestionnairetemplateComponent,
    EditquestionnaireComponent,
    ViewresponseComponent,
    QuestionnaireresponseComponent,
    NewquestionnairetemplateComponent,
    AnalysisComponent,
    SendquestionnaireComponent,
   
    
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgDragDropModule.forRoot(),
    DragulaModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()

   
  ],
  providers: [
    AuthService,
    AuthGuard,
    QuestionnaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
