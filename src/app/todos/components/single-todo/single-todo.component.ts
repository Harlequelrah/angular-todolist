import { DatePipe, NgStyle, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';

@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [NgStyle,TitleCasePipe,DatePipe],
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss'
})
export class SingleTodoComponent {
  constructor(private todoService: TodosService, private route: ActivatedRoute) { }


  todo!: Todo;
  button_text!: "Commencer" | "Finir";
  ngOnInit(): void {

    this.getTodo();
    this.button_text = this.todo.est_fini ? "Commencer" : "Finir"
  }
  OnChangeStatut(): void {
    this.todo.est_fini = !this.todo.est_fini
    if (this.todo.est_fini) {
      this.button_text = "Commencer"
    }
    else {
      this.button_text = "Finir"
    }
  }
  private getTodo(): void {
    const todoId = Number(this.route.snapshot.params['id']);
    if (todoId) {
      console.log(todoId);
      this.todo = this.todoService.getTodo(todoId);
    }

  }
}
