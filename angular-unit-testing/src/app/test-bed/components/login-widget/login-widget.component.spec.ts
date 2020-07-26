import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWidgetComponent } from './login-widget.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginWidgetComponent', () => {
  let component: LoginWidgetComponent;
  let fixture: ComponentFixture<LoginWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the message for anonymous user', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const message: HTMLElement = nativeElement.querySelector('.login-message');

    expect(message.textContent).toEqual('You are logged out');
  });

  it('should display the message for anonymous user with debug element', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const messageElement: DebugElement = debugElement.query(By.css('.login-message'));
    const message: HTMLElement = messageElement.nativeElement;

    expect(message.textContent).toEqual('You are logged out');
  });

  it('should display the message for logged in user', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const loginButton: DebugElement = debugElement.query(By.css('.login-button'));
    loginButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    const messageElement: DebugElement = debugElement.query(By.css('.login-message'));
    const message: HTMLElement = messageElement.nativeElement;

    expect(message.textContent).toEqual('You are logged in');
  });
});
