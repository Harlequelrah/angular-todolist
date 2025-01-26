import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../../../core/models/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass,TitleCasePipe],
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
