import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../models/task';

@Pipe({
  name: 'filterByStatus'
})
export class StatusPipe implements PipeTransform {
  transform(allTasks: ITask[], status: string) {
    if (!allTasks || !status) {
      return allTasks;
    }

    return allTasks.filter((task) => task.status === status);
  }
}
