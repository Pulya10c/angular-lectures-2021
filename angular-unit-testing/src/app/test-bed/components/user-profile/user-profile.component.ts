import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public publications = [
    { id: 1, title: 'Breaking news!' },
    { id: 2, title: 'Meows news!' },
  ];
}
