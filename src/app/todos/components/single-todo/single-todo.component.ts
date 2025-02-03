import { AsyncPipe, DatePipe, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [NgStyle,TitleCasePipe,DatePipe,AsyncPipe,NgIf],
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss'
})
export class SingleTodoComponent {
  constructor(private todoService: TodosService, private route: ActivatedRoute) { }


  todo$!: Observable<Todo>;
  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo(): void {
    const todoId = Number(this.route.snapshot.params['id']);
    if (todoId) {
      console.log(todoId);
      this.todo$ = this.todoService.getTodo(todoId);
    }

  }
}
