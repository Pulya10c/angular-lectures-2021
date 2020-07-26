import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'please'
})
export class PleasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log(args);
    return `Please ${value}`;
  }

}
