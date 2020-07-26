import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDoneImpure',
  pure: false
})
export class IsDoneImpurePipe implements PipeTransform {
  transform(allTasks: any[], isDone: boolean) {
    console.log('Impure pipe');
    return allTasks.filter(task => task.isDone === isDone);
  }
}
