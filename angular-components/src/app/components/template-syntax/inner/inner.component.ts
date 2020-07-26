import { Component } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  exportAs: 'inner'
})
export class InnerComponent {
  public innerProperty = 'Hi there!';

  public innerMethod() {
    console.log('Hey! You\'ve just called the inner method');
  }
}
