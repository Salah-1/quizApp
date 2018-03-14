import { Component, OnInit } from '@angular/core';
import { Question } from '../question'
import { questionsData } from '../mock-questions';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  questionsToShow = questionsData ; 

  constructor() { }

  ngOnInit() {
  }

}
