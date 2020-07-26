import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-element-with-props-to-override',
  templateUrl: './element-with-props-to-override.component.html',
  styleUrls: ['./element-with-props-to-override.component.scss']
})
export class ElementWithPropsToOverrideComponent implements OnChanges {
  @Input() public propToOverride: string;
  @Output() public click = new EventEmitter<string>();

  public ngOnChanges(): void {
    console.log('ElementWithPropsToOverrideComponent has changed');
    console.log('this.propToOverride -> ', this.propToOverride);
  }

  public onClick() {
    this.click.emit('Text from inner component');
  }

}
