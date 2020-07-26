import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedPageComponent } from './lazy-loaded-page.component';

describe('LazyLoadedPageComponent', () => {
  let component: LazyLoadedPageComponent;
  let fixture: ComponentFixture<LazyLoadedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
