import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input,
  SimpleChanges
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-inner-lyfecycle',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss']
})
export class InnerLifecycleComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() smth: any;
  public interval: any;

  constructor() {
    console.log('Inner: Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inner: ngOnChanges', changes);
  }

  ngOnInit() {
    // this.interval = setInterval(() => console.log('interval'), 100);
    console.log('Inner: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Inner: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Inner: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Inner: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Inner: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Inner: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('Inner: ngOnDestroy');
  }
}
