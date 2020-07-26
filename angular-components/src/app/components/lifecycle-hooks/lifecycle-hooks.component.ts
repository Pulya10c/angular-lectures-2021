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
  SimpleChanges,
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent
  implements OnInit,
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
    console.log('Outer: Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Outer: ngOnChanges', changes);
  }

  ngOnInit() {
    // this.interval = setInterval(() => console.log('interval'), 100);
    console.log('Outer: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Outer: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Outer: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Outer: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Outer: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Outer: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('Outer: ngOnDestroy');
  }

}
