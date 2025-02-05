import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent implements OnInit , OnDestroy{
  constructor(private todoService: TodosService) { }
  todos$!: Observable<Todo[]>;
  myTodos!: Todo[];
  // destroy$!: Subject<boolean>;
  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
    // this.destroy$ = new Subject<boolean>();
    // this.myTodos = this.todoService.getTodos();
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe();

  }
  ngOnDestroy(): void {
    // this.destroy$.next(true);
  }
}
