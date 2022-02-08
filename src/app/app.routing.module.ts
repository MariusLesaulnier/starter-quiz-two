import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/quiz-edit/quiz-edit.component';
import {QuizFormComponent} from './quizzes/quiz-form/quiz-form.component';



const routes: Routes = [
  {path: defaultStatus, component: QuizListComponent},
  {path: 'edit-quiz/:id', component: EditQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
