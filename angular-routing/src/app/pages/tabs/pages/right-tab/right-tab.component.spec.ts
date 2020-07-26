import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTabComponent } from './right-tab.component';

describe('RightTabComponent', () => {
  let component: RightTabComponent;
  let fixture: ComponentFixture<RightTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
