import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  @Input() todo!: Todo;
  ngOnInit(): void {


  }


  
}
