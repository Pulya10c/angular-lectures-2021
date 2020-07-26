import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInnerComponent } from './content-inner.component';

describe('ContentInnerComponent', () => {
  let component: ContentInnerComponent;
  let fixture: ComponentFixture<ContentInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
