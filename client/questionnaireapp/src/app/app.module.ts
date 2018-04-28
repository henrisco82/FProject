import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';

import { SDKBrowserModule } from './shared/sdk/index';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { RegisterPage } from '../pages/register/register';
import { SendQuestionnairePage } from '../pages/sendquestionnaire/sendquestionnaire';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { QuestionsPage } from '../pages/questions/questions';


import { LoginComponent } from './components/login/login.component';

import {AuthService} from './services/auth.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginComponent,
    RegisterPage,
    SendQuestionnairePage,
    QuestionsPage,
    QuestionnairePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    SDKBrowserModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginComponent,
    RegisterPage,
    SendQuestionnairePage,
    QuestionsPage,
    QuestionnairePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
