import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { QuestionService } from '../../../services/question.service';
import { Quiz } from '../../../models/quiz.model';
import {Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent implements OnInit {
  public questionForm: FormGroup;

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  constructor(public formBuilder: FormBuilder, public questionService: QuestionService, public quizService: QuizService,
              private route: ActivatedRoute){
    // Form creation
    this.initializeQuestionForm();
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit(): void {
  }

  private initializeQuestionForm(): void{
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    });
  }

  get answers(): FormArray{
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(): FormGroup{
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(): void{
    this.answers.push(this.createAnswer());
  }

  addQuestion(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    questionToCreate.answers = [];
    console.log('Add question: ', questionToCreate);
    this.questionService.addQuestion(questionToCreate);
    console.log('ListOfQuestions: ', this.questionService);
  }

}
