import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings-example',
  templateUrl: './bindings-example.component.html',
  styleUrls: ['./bindings-example.component.scss']
})
export class BindingsExampleComponent {
  public message = 'Hello. I\'m a message';
  public username: string;

  public imageWidth = 200;

  public innerHtml = '<b>I\'ve been inserted via innerHTML</b>';

  public imagePath = 'assets/angular.png';

  public eventTimers: { [key: string]: any } = {
    click: null,
    mouseenter: null,
    mouseleave: null,
    keypress: null,
    change: null
  };

  public readonly eventMessages = {
    click: 'Clicked',
    mouseenter: 'Mouse enter',
    mouseleave: 'Mouse leave',
    keypress: 'Key pressed',
    change: 'Input changed'
  };

  public lastKeyPressed: string;

  handleClick(event: MouseEvent) {
    this.handleEvent(event, 'click');
  }

  handleMouseenter(event: MouseEvent) {
    this.handleEvent(event, 'mouseenter');
  }

  handleMouseleave(event: MouseEvent) {
    this.handleEvent(event, 'mouseleave');
  }

  handleKeyEvent(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
    this.handleEvent(event, 'keypress');
  }

  handleChange(event: Event) {
    this.handleEvent(event, 'change');
  }

  private handleEvent(event: MouseEvent | KeyboardEvent | Event, type: string) {
    console.log(event);

    if (this.eventTimers[type]) {
      clearTimeout(this.eventTimers[type]);
    }

    this.eventTimers[type] = setTimeout(() => {
      this.eventTimers[type] = null;
    }, 1000);
  }
}
