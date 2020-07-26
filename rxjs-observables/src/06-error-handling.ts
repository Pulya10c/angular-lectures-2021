import { throwError, of, Observable } from 'rxjs';
import {
  catchError,
  retry,
  retryWhen,
  onErrorResumeNext
} from 'rxjs/operators';

console.log('throwError started:');

throwError('Whoops!')
  .pipe(
    catchError(err => {
      console.log('throwError catch:', err);
      return of('safety result');
    })
  )
  .subscribe(
    value => console.log('throwError next: ', value),
    error => console.error('throwError error: ', error),
    () => console.log('throwError complete')
  );

console.log('retry started:');

Observable.create(observer => {
  console.log('retry: Next attempt');
  observer.error('Whoops!');
})
  .pipe(retry(2))
  .subscribe(
    value => console.log('retry next: ', value),
    error => console.error('retry error: ', error),
    () => console.log('retry complete')
  );

console.log('retryWhen started:');  

let flag = true;
const obs = new Observable(observer => {
  console.log('retryWhen: let wait a second');
  setTimeout(() => observer.next('any'), 1000);
});

Observable.create(observer => {
  console.log('retryWhen: Fake server call');
  if (flag) {
    observer.error('Whoops!');
    flag = false;
  } else {
    observer.next('success');
  }
})
  .pipe(retryWhen(err$ => obs))
  .subscribe(value => console.log('retryWhen next:', value));

console.log('onErrorResumeNext started:');    

const planB = of('Nice solution ;)');

Observable.create(observer => {
  console.log('onErrorResumeNext: Attempt');
  observer.error('Whoops!');
})
  .pipe(onErrorResumeNext(planB))
  .subscribe(
    value => console.log('onErrorResumeNext next: ', value),
    error => console.error('onErrorResumeNext error: ', error),
    () => console.log('onErrorResumeNext complete')
  );
