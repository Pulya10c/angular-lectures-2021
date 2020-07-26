import { Component } from '@angular/core';

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.scss']
})
export class LoginWidgetComponent {
  public isLoggedIn = false;

  public login(): void {
    this.isLoggedIn = true;
  }

  get message(): string {
    return this.isLoggedIn
      ? 'You are logged in'
      : 'You are logged out';
  }
}
