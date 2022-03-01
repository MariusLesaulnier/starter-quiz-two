import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import {Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public questionList: Question[] = [];

  constructor(
    public questionService: QuestionService,
    public quizService: QuizService,
    private route: ActivatedRoute,
  ) {
    questionService.getQuestions(quizService.getQuiz(Number(this.route.snapshot.paramMap.get('id'))));
    this.questionService.questions$.subscribe((questionList) => {
      this.questionList = questionList;
    });
  }

  ngOnInit(): void {
  }
  deleteQuestion(question: Question): void{
    console.log('delete question:', question);
    this.questionService.deleteQuestion(question);
  }
}
