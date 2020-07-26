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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
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
    console.log('App: Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App: ngOnChanges', changes);
  }

  ngOnInit() {
    // this.interval = setInterval(() => console.log('interval'), 100);
    console.log('App: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('App: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('App: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('App: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('App: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('App: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('App: ngOnDestroy');
  }
}
