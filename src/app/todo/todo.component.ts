import { Component } from '@angular/core';
import { TodoItem} from './todo.types';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],

})
export class TodoComponent {
  public items: Array<TodoItem> = [
    { id: 1, checked: false, description: 'componente erstellen' },
    { id: 2, checked: false, description: 'todos anzeigen' },
    { id: 3, checked: false, description: 'todos hinzugrifen' },
    { id: 4, checked: false, description: 'todos erledigen ;)' },
  ]
}
