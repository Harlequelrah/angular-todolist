import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../core/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent  {


constructor(private router:Router){}

  @Input() todo!: Todo;
  OnViewTodo() {
    this.router.navigateByUrl(`/todos/${this.todo.id}`);
  }
}
