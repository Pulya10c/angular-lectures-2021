import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent {
  @Input() public publication: any;
  @Output() public like = new EventEmitter();

  public onLike() {
    this.like.emit(this.publication);
  }
}
