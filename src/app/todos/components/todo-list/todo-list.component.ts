import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent implements OnInit {
  constructor(private todoService: TodosService) { }
  myTodos!: Todo[];
  ngOnInit(): void {
    this.myTodos = this.todoService.getTodos();

  }
}
