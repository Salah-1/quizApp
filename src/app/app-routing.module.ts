import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent }      from './home-page/home-page.component';
import { AdminsterQuizComponent }  from './adminster-quiz/adminster-quiz.component';
import { StartQuizComponent }      from './start-quiz/start-quiz.component';
import { QuizFormComponent }      from './quiz-form/quiz-form.component';

 const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'student', component: StartQuizComponent },
  { path: 'teacher', component: AdminsterQuizComponent }
  
 /* { path: 'detail/:id', component: HeroDetailComponent }, */
 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}