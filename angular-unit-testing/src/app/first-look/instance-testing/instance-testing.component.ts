import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instance-testing',
  templateUrl: './instance-testing.component.html',
  styleUrls: ['./instance-testing.component.scss']
})
export class InstanceTestingComponent implements OnInit {
  data: string;
  isLoggedIn = false;

  constructor() { }

  ngOnInit() {
    this.data = 'Hey there!';
  }

  login() {
    this.isLoggedIn = true;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  decide(condition: boolean) {
    if (condition) {
      return 'It\'s true';
    } else {
      return 'It\'s false';
    }
  }

  decideTernaty(condition: boolean) {
    return `It's ${ condition ? 'true' : 'false' }`;
  }

}
