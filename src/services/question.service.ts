import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Question} from '../models/question.model';
import {Quiz} from '../models/quiz.model';
import {QuizService} from './quiz.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions: Question[];

  /*url var*/
  private http: HttpClient;
  private router;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject([]);

  constructor(http: HttpClient, router: Router, quizService: QuizService) {
    this.http = http;
    this.router = router;
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
  getQuestions(quiz: Quiz): void {
    this.questions = quiz.questions;
    this.questions$.next(this.questions);
  }
}
