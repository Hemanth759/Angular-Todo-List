import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodo().subscribe((todos) => {
      this.todos = todos;
    })
  }

  // deletes todo from the todos list
  deleteTodo(todo: Todo): void {
    // deleting in UI
    this.todos = this.todos.filter((t: Todo) => { return t.id !== todo.id });

    // Deleting on server
    this.todoService.deleteTodo(todo).subscribe();
  }

  // adds todo to the todos list
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((t) => {
      this.todos.push(t);
    });
  }
}
