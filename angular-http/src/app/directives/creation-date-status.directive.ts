import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCreationDateStatus]'
})
export class CreationDateStatusDirective implements OnChanges {
  @Input() public creationDateString: string;
  public readonly upcomingColor = '#29aeae';
  public readonly freshColor = '#4a870e';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  public ngOnChanges(): void {
    const now = new Date();
    const creationDate = new Date(this.creationDateString);
    const daysDifference = Math.round((creationDate.getTime() - now.getTime()) / (24 * 3600 * 1000));

    let color;

    switch (true) {
      case daysDifference > 0:
        color = this.upcomingColor;
        break;
      case daysDifference >= -14:
        color = this.freshColor;
        break;
    }

    if (color) {
      this.renderer.setStyle(this.element.nativeElement, 'border', `2px solid ${color}`);
    }
  }
}
