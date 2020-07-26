import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToTime'
})
export class MinutesToTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);

    const hoursString = hours ? `${hours} h` : '';
    const minutesString = minutes ? `${minutes} min` : '';

    return [hoursString, minutesString].filter((str) => str).join(' ');
  }

}
