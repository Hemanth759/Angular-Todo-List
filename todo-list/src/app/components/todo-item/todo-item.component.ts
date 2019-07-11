import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  todo: Todo;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
