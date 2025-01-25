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
  myTodos!: Todo[];
  ngOnInit(): void {
    this.myTodos = [
      new Todo(
        1,
        "Learning Angular",
        "I am now learning angular",
        true,
        new Date(),
        new Date(),
      ),
      new Todo(
        2,
        "Strike The blood",
        "Finir l'animé Strike The blood",
        false,
        new Date(),
        new Date()
      ),
      new Todo(
        3,
        "Continue TOEIC",
        "End my TOEIC courses in Global Exam",
        true,
        new Date()
      ),
      new Todo(
        1,
        "Learning Angular",
        "I am now learning angular",
        false,
        new Date(),
        new Date(),
      ),
      new Todo(
        2,
        "Strike The blood",
        "Finir l'animé Strike The blood",
        true,
        new Date(),
        new Date()
      ),
      new Todo(
        3,
        "Continue TOEIC",
        "End my TOEIC courses in Global Exam",
        false,
        new Date()
      )

    ]


  }
}
