import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
  label: 'Usain bolt est un bg...',
  answers: [
    {
      value: 'rapide',
      isCorrect: false,
    },
    {
      value: 'rapide',
      isCorrect: false,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: '0',
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        id: '1',
        name: 'Les Sports',
        theme: 'Sports',
        questions: [QUESTION_SPORT],
    }
];
