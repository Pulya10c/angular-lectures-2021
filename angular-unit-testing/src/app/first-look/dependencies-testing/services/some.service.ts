import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SomeService {
  getMessage() {
    return 'Hey there!';
  }

  getAsyncData() {
    return of('Hey there!').pipe(delay(2000));
  }
}
