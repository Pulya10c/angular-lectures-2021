import { Directive, ElementRef, Renderer2, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCustomColorBinding]'
})
export class HighlightCustomColorBindingDirective implements OnChanges {
  @Input('appHighlightCustomColorBinding') color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  public ngOnChanges(): void {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
