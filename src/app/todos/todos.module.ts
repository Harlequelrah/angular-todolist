import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosRoutingModule } from './todos-routing.module';



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
    TodosRoutingModule,
  ],

  exports: [
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    SingleTodoComponent
  ],
})
export class TodosModule { }
