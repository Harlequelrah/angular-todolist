import { AsyncPipe, DatePipe, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Todo } from '../../../core/models/todo';
import { TodosService } from '../../../core/services/todos.service';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe,NgStyle,TitleCasePipe,DatePipe,NgIf],
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss','../single-todo/single-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  todoForm!: FormGroup;
  todoPreview$!: Observable<Todo>;

  constructor(private router : Router,private formBuilder : FormBuilder,private todoService : TodosService) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      titre: [null,Validators.required],
      description: [null, Validators.required]
    },
      {updateOn:'blur'}
    );
    // this.todoPreview$ = this.todoForm.valueChanges.pipe(
    //   map(formValue => (
    //     {
    //       ...formValue,
    //       id:0,
    //       date_creation: new Date,
    //       date_modification: new Date,
    //       est_fini : false
    //     }
    //   ))
    // );
  }


  onAddTodo():void {
    this.todoService.addTodo(this.todoForm.value).pipe(
      tap(
        () => {
          this.router.navigateByUrl('/todos')
        }
      )
    ).subscribe();
    // this.router.navigateByUrl('/todos');
  }



}
