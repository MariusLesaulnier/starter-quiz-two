import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  /*url var*/
  private url = 'https://raw.githubusercontent.com/tom3883/starter-quizz-2022/f1835686a57a88cd2d46b04166155e9358786300/quiz-data.json';
  private http: HttpClient;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);
  constructor(http: HttpClient) {
    this.http = http;
  }

  addQuiz(quiz: Quiz): void {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }
  deleteQuiz(quiz: Quiz): void {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    const indexOfQuiz: number = this.quizzes.indexOf(quiz);
    this.quizzes.splice(indexOfQuiz, 1);
    this.quizzes$.next(this.quizzes);
  }

  getQuizzes(): void {
    this.http.get<Quiz[]>(this.url).subscribe((quiz) => {
      this.quizzes = quiz;
      this.quizzes$.next(quiz);
    });
  }
}
