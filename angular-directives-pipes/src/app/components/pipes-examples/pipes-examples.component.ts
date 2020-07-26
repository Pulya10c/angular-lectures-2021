import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent {
  public dateString = new Date().toISOString();
}
