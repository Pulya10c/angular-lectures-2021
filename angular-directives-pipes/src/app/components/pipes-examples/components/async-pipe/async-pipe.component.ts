import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {
  public data: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
      resolve('RECEIVED DATA!');
    }, 5000);
  });

  public count = 0;
  public seconds: Observable<any> = new Observable(observer => {
    setInterval(() => { observer.next(this.count++); }, 1000);
  });
}
