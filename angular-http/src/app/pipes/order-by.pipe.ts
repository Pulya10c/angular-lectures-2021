import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe<T> implements PipeTransform {

  transform(items: T[], field: string): T[] {
    return [...items].sort((first, second) => {
      if (first[field] < second[field]) {
        return -1;
      } else if (first[field] > second[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
