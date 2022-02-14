import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import {Question} from '../../../models/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public questionList: Question[] = [];

  constructor(public questionService: QuestionService) {
    questionService.getQuestions();
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
