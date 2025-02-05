import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: NewTodoComponent
  },
  {
    path: ':id',
    component: SingleTodoComponent
  },
  {
    path: '',
    component: TodoListComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
