import { Component, OnInit } from '@angular/core';
import { SomeService } from '../../services/some.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  message: string;
  asyncData: string;

  constructor(private someService: SomeService) { }

  ngOnInit() {
    this.message = this.someService.getMessage();
  }

  getAsyncData() {
    this.someService.getAsyncData().subscribe((data) => {
      this.asyncData = data;
    });
  }

}
