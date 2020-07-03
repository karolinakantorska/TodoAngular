import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './todo.types';

@Pipe({
  name: 'todos', pure: false
})

export class TodosPipe implements PipeTransform {
  transform(value: TodoItem[], done: boolean): TodoItem[] {
    return value ? value.filter((todo) => todo.checked === done) : value;
  }
}
