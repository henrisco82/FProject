import { appRoutes } from './app.routes';
import { QuestionnaireresponseComponent } from './questionnaireresponse/questionnaireresponse.component';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewQuestionnaireComponent } from './newquestionnaire/newquestionnaire.component';
import { ViewquestionnaireComponent } from './viewquestionnaire/viewquestionnaire.component';
import { QuestionnairetemplateComponent } from './questionnairetemplate/questionnairetemplate.component';
import { EditquestionnaireComponent } from './editquestionnaire/editquestionnaire.component';
import { ViewresponseComponent } from './viewresponse/viewresponse.component'
import { NewquestionnairetemplateComponent } from './newquestionnairetemplate/newquestionnairetemplate.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SendquestionnaireComponent } from './sendquestionnaire/sendquestionnaire.component';
import { AuthGuard } from './auth.guard';

describe('routes', ()=>{
    it('should contain a route for /QuestionnaireResponse', ()=>{
        expect(appRoutes).toContain({ path: 'QuestionnaireResponse/:id', component: QuestionnaireresponseComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /Home', ()=>{
        expect(appRoutes).toContain({ path: 'Home', component: HomeComponent })
        
    });
    it('should contain a route for /Questionnaire', ()=>{
        expect(appRoutes).toContain({ path: 'Questionnaire', component: QuestionnaireComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /NewQuestionnaire', ()=>{
        expect(appRoutes).toContain({ path: 'NewQuestionnaire', component: NewQuestionnaireComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /ViewQuestionnaire', ()=>{
        expect(appRoutes).toContain({ path: 'ViewQuestionnaire', component: ViewquestionnaireComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /Questionnairetemplate', ()=>{
        expect(appRoutes).toContain({ path: 'Questionnairetemplate', component: QuestionnairetemplateComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /Edit/:id', ()=>{
        expect(appRoutes).toContain({ path: 'Edit/:id', component: EditquestionnaireComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /View', ()=>{
        expect(appRoutes).toContain({ path: 'View', component: ViewresponseComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /newtemplate/:id', ()=>{
        expect(appRoutes).toContain({ path: 'newtemplate/:id', component: NewquestionnairetemplateComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /analysis', ()=>{
        expect(appRoutes).toContain({ path: 'analysis', component: AnalysisComponent, canActivate: [AuthGuard] })
    });
    it('should contain a route for /Sendquestionnaire', ()=>{
        expect(appRoutes).toContain({ path: 'Sendquestionnaire', component: SendquestionnaireComponent, canActivate: [AuthGuard] })
    });
    
});