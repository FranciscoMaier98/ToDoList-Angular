import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'todo-list';
  public tarefa = "";
  public items = ['item1', 'item2', 'item3', 'item4'];

  addTarefa() {
    this.items.push(this.tarefa);
  }

  removeTarefa(item:string) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
