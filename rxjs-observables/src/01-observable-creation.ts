import { Observable } from 'rxjs';

const source = Observable.create((observer) => {
  let count = 0;

   const timer = setInterval(() => {
       observer.next(count);
       count++;
   }, 500);

   return () => clearInterval(timer);
});

source.subscribe((value) => console.log(value));