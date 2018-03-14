import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
   
   
 

 myStudent: Student = new Student(33, 'John Doe');
someStudent: Student = new Student(35, 'Muhamad Ali');


x: number = this.myStudent.id;
y: string  = 'bla bla ';

  ngOnInit() {

    this.myStudent.id = 34;
    this.someStudent.id = 36;
   

  }

}
