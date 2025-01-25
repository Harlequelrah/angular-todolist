import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgStyle,NgClass,TitleCasePipe,DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {



  @Input() todo!: Todo;
  button_text!: "Commencer" | "Finir"

  ngOnInit(): void {
    this.button_text = this.todo.est_fini ? "Commencer" : "Finir"
  }
  OnChangeStatut() :void {
    this.todo.est_fini = !this.todo.est_fini
    if (this.todo.est_fini) {
      this.button_text="Commencer"
    }
    else {
      this.button_text="Finir"
    }
  }


}
