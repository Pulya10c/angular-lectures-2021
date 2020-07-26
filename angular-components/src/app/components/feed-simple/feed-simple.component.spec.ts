import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSimpleComponent } from './feed-simple.component';

describe('FeedSimpleComponent', () => {
  let component: FeedSimpleComponent;
  let fixture: ComponentFixture<FeedSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
