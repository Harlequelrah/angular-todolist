import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  myFirstTodo!: Todo;
  mySecondTodo!: Todo;
  myThirdTodo!: Todo;
  ngOnInit(): void {
    this.myFirstTodo = new Todo(
      1,
      "Learning Angular",
      "I am now learning angular",
      new Date(),
      new Date(),
    )
    this.mySecondTodo = new Todo(
      2,
      "Strike The blood",
      "Finir l'animé Strike The blood",
      new Date(),
      new Date()
    )
    this.myThirdTodo = new Todo(
      3,
      "Continue TOEIC",
      "End my TOEIC courses in Global Exam",
      new Date()
    )

  }
}
