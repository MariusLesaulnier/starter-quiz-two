import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Question} from '../models/question.model';
import {Quiz} from "../models/quiz.model";


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private questions: Question[];

  /*url var*/
  private url = 'https://raw.githubusercontent.com/tom3883/starter-quizz-2022/f1835686a57a88cd2d46b04166155e9358786300/quiz-data.json';
  private http: HttpClient;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject([]);
  constructor(http: HttpClient) {
    this.http = http;
  }

  addQuestion(question: Question): void {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.questions.push(question);
    this.questions$.next(this.questions);
  }
  deleteQuestion(question: Question): void {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    const indexOfQuestion: number = this.questions.indexOf(question);
    this.questions.splice(indexOfQuestion, 1);
    this.questions$.next(this.questions);
  }
  getQuestions(): void {
    this.http.get<Question[]>(this.url).subscribe((question) => {
      this.questions = question;
      this.questions$.next(question);
    });
  }
}
