import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  public ngOnInit() {
    // this.router.events.subscribe( event => console.log(event.__proto__.constructor.name) );
  }

  public performSimpleRedirect() {
    this.router.navigateByUrl('/simple');
  }

  public goToUserPage() {
    const obtainedUserId: string = '456';
    this.router.navigate(['user', obtainedUserId]);
  }
}
