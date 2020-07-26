import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginWidgetWithServiceComponent } from './login-widget-with-service.component';
import { of, asyncScheduler } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginWidgetWithServiceComponent', () => {
  let component: LoginWidgetWithServiceComponent;
  let fixture: ComponentFixture<LoginWidgetWithServiceComponent>;
  let mockLoginService: LoginService;

  beforeEach(async(() => {
    mockLoginService = {
      login: jasmine.createSpy('getAsyncData')
        .and.returnValue(of(true, asyncScheduler))
    };

    TestBed.configureTestingModule({
      declarations: [ LoginWidgetWithServiceComponent ],
      providers: [{ provide: LoginService, useValue: mockLoginService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.login-button'));
    button.triggerEventHandler('click', null);

    expect(mockLoginService.login).toHaveBeenCalled();

    tick();
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const messageElement: DebugElement = debugElement.query(By.css('.login-message'));
    const message: HTMLElement = messageElement.nativeElement;

    expect(message.textContent).toEqual('You are logged in');
  }));
});
