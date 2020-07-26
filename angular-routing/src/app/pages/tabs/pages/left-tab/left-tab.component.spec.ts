import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTabComponent } from './left-tab.component';

describe('LeftTabComponent', () => {
  let component: LeftTabComponent;
  let fixture: ComponentFixture<LeftTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
