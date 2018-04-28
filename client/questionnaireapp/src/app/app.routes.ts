import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterPage } from '../pages/register/register';
import { SendQuestionnairePage } from '../pages/sendquestionnaire/sendquestionnaire';

import { LoginRoutes } from './components/login/login.routes';
import { RegisterRoutes } from './../pages/register/register.routes';
import { SendQuestionnaireRoutes } from './../pages/sendquestionnaire/sendquestionnaire.routes';

export const appRoutes: Routes = [
    ...LoginRoutes,
    ...RegisterRoutes,
    ...SendQuestionnaireRoutes,
  
    { path: '**', component: LoginComponent}

];