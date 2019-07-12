import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { 

  }

  ngOnInit() {
  }

  // Set dynamic class
  setClass() {
    let classes = {
      todo: true,
      'is-Complete': this.todo.completed
    }

    return classes;
  }

}
