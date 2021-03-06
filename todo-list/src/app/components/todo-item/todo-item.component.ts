import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { 

  }

  ngOnInit() {
  }

  onToggle(todo: Todo) {
    // UI toggling
    todo.completed = !todo.completed;

    // Server toggling
    this.todoService.toggleCompleted(todo).subscribe((todo: Todo) => {
      console.log(`todo of ${todo} completion status changed at server`);
    });
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
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
