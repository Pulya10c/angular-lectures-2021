import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDonePure',
  pure: true
})
export class IsDonePurePipe implements PipeTransform {
  transform(allTasks: any[], isDone: boolean) {
    console.log('Pure pipe');
    return allTasks.filter(task => task.isDone === isDone);
  }
}
