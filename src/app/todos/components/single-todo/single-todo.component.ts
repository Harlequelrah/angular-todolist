import { AsyncPipe, DatePipe, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';
import { map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [NgStyle,TitleCasePipe,DatePipe,AsyncPipe,NgIf],
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss'
})
export class SingleTodoComponent {


  constructor(private todoService: TodosService, private route: ActivatedRoute,private router:Router) { }

  button_text!: string;
  todo$!: Observable<Todo>;
  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo(): void {
    const todoId = this.getTodoId();
    if (todoId) {
      console.log(todoId);
      this.todo$ = this.todoService.getTodo(todoId).pipe(
        tap(
          (todo) =>
          {
            this.button_text=todo.est_fini?"Commencer":"Finir"
          }
        )
      );
    }

  }
  getTodoId(): number
  {
    return  Number(this.route.snapshot.params['id']);
  }
  onDeleteTodo() {
    const todoId = this.getTodoId();
    this.todoService.deteleTodo(todoId).pipe(
      tap(
        () => {
          this.router.navigateByUrl("/todos");
        }
      )
    ).subscribe();
  }
  onUpdateTodoStatut() {
    const todoId = this.getTodoId();
    this.todo$=this.todoService.updateTodoStatutById(todoId).pipe(
      tap(
        (todo) => {
          this.button_text = todo.est_fini ? "Commencer" : "Finir"
        }
      )
    );
  }
}
