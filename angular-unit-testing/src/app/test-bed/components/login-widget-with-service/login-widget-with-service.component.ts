import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-widget-with-service',
  templateUrl: './login-widget-with-service.component.html',
  styleUrls: ['./login-widget-with-service.component.scss']
})
export class LoginWidgetWithServiceComponent {
  public isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  public login() {
    this.loginService.login().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  get message(): string {
    return this.isLoggedIn
      ? 'You are logged in'
      : 'You are logged out';
  }

}
