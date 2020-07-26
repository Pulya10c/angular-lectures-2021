import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    // (this.elementRef.nativeElement).style.background = 'yellow';
  }
}
