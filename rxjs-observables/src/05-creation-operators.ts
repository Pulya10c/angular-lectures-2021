import { of, from, range, throwError, interval, EMPTY, NEVER } from 'rxjs';

console.log('.of({ message: \'any Object\' }) started');

of({ message: 'any Object' }).subscribe(
  value => console.log('.of({ message: \'any Object\' }) next: ', value),
  error => console.error('.of({ message: \'any Object\' }) error: ', error),
  () => console.log('.of({ message: \'any Object\' }) complete')
);

console.log('.from([10, 20, 30]) started');

from([10, 20, 30]).subscribe(
  val => console.log('.from([10, 20, 30]) next:', val),
  err => console.error('.from([10, 20, 30]) error:', err),
  () => console.log('.from([10, 20, 30]) completed')
);

console.log('.range(10, 4) started');

range(10, 4).subscribe(
  value => console.log('.range(10, 4) next: ', value),
  error => console.error('.range(10, 4) error: ', error),
  () => console.log('.range(10, 4) complete')
);

console.log('.interval(2000) started');

interval(2000).subscribe(
  value => console.log('.interval(2000) next: ', value),
  error => console.error('.interval(2000) error: ', error),
  () => console.log('.interval(2000) complete')
);

console.log('.throwError(\'Whoops!\') started');

throwError('Whoops!').subscribe(
  val => console.log('.throwError(\'Whoops!\') next:', val),
  err => console.error('.throwError(\'Whoops!\') error:', err),
  () => console.log('.throwError(\'Whoops!\') completed')
);

console.log('EMPTY started');

EMPTY.subscribe(
  value => console.log('EMPTY next:', value),
  error => console.error('EMPTY error:', error),
  () => console.log('EMPTY completed')
);

console.log('NEVER started');

NEVER.subscribe(
  value => console.log('NEVER next:', value),
  error => console.error('NEVER error:', error),
  () => console.log('NEVER completed')
);
