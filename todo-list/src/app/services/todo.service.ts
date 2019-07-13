import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(): Todo[] {
    return [
      {
        id: 1,
        title: "Eat apple",
        completed: false
      },
      {
        id: 2,
        title: "Eat another apple",
        completed: true
      },
      {
        id: 3,
        title: "do bath",
        completed: false
      },
    ];
  }
}
