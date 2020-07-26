import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe<T> implements PipeTransform {

  transform(items: T[], field: string, searchCriteria: string): any {
    return searchCriteria ? items.filter((item) => item[field].toString().toLowerCase().includes(searchCriteria)) : items;
  }

}
