import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../models/todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosURL: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) { }

  // gets Todos
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // toggles todo status
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // delete todos
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todo
  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }
}
