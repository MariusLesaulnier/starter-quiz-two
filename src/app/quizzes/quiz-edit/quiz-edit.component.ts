import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Quiz} from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
})

export class EditQuizComponent implements OnInit{
  private quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quizService.getQuiz(id).subscribe(q => this.quiz = q);
  }

  goBack(): void {
    this.location.back();
  }
}
