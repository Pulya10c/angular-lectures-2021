import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-vs-impure',
  templateUrl: './pure-vs-impure.component.html',
  styleUrls: ['./pure-vs-impure.component.scss']
})
export class PureVsImpureComponent {
  public isDone = true;
  public tasks: any[] = [
    { name: 'Todo1', isDone: true },
    { name: 'Todo2', isDone: false }
  ];
  public isDoneTasks: any[];
  public someEl: boolean;

  constructor() {
    this.initIsDoneTasks();
  }

  initIsDoneTasks() {
    this.isDoneTasks = this.tasks.filter(task => task.isDone === true);
  }

  addTask(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    const task = { name, isDone: this.isDone };
    this.tasks.push(task);
    this.initIsDoneTasks();
  }

  changeReference() {
    this.tasks = [...this.tasks];
    this.initIsDoneTasks();
  }
}
