import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService: TodoService) { 

  }

  ngOnInit() {
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo) {
    console.log('deleted');
  }

  // Set dynamic class
  setClass() {
    let classes = {
      'todo': true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

}
