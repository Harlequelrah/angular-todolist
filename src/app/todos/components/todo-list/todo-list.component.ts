import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';
import { interval, Subject, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent implements OnInit , OnDestroy{
  constructor(private todoService: TodosService) { }

  myTodos!: Todo[];
  // destroy$!: Subject<boolean>;
  ngOnInit(): void {
    // this.destroy$ = new Subject<boolean>();
    this.myTodos = this.todoService.getTodos();
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe();

  }
  ngOnDestroy(): void {
    // this.destroy$.next(true);
  }
}
