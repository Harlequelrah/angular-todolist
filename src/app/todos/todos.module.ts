import { AsyncPipe, CommonModule, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    SingleTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    NgStyle,
    TitleCasePipe,
    DatePipe,
    NgClass,
    AsyncPipe,
    NgIf,
    NgFor
  ],
  exports: [
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    SingleTodoComponent
  ],
})
export class TodosModule { }
