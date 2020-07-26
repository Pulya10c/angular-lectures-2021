import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public userId: number;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      // console.log('[User Route]', params);
      this.userId = params.id;
      console.log(this.userId);
    });

    // console.log('Snapshot:', this.route.snapshot.params.id);
  }

  public showInfo() {
    console.log('Log Snapshot:', this.route.snapshot);
  }

}
